import { mutationType }  from '@prisma/nexus';
import { compare, hash } from "bcryptjs";
import { sign }          from "jsonwebtoken";
import { APP_SECRET }    from '../utils';

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneAcademicLevel();
    t.crud.createOneSchool();
    t.field("createOneTeacher", {
      type: "AuthPayload",
      args: {
        firstName: "String",
        lastName: "String",
        role: "Role",
        password: "String",
        school: "SchoolWhereUniqueInput",
        username: "String"
      },
      resolve: async (parent, { firstName, lastName, role, password, school, username }, ctx) => {
        const hashedPassword = await hash(password, 10);
        const teacher = await ctx.photon.teachers.create({
          data: {
            firstName,
            lastName,
            role,
            username,
            password: hashedPassword,
            school: {
              connect: school
            }
          }
        });
        return {
          token: sign({ teacherId: teacher.id }, APP_SECRET),
          teacher
        };
      }
    });
    t.field("login", {
      type: "AuthPayload",
      args: {
        teacher: "TeacherWhereUniqueInput",
        password: "String"
      },
      resolve: async (parent, { teacher: teacherUnique, password }, ctx) => {
        const teacher = await ctx.photon.teachers.findOne({
          where: teacherUnique
        });
        if (!teacher) throw new Error("Teacher not found");
        if (await compare(password, teacher.password)) {
          return {
            token: sign({ teacherId: teacher.id }, APP_SECRET),
            teacher
          };
        } else {
          throw new Error("Incorrect password");
        }
      }
    });
  },
});
