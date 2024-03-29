import { mutationType, stringArg } from '@prisma/nexus';
import { compare, hash }           from "bcryptjs";
import { sign }                    from "jsonwebtoken";
import { APP_SECRET }              from '../utils';

export const Mutation = mutationType({
  definition(t) {

    t.crud.createOneSchool();
    t.crud.deleteOneTeacher();
    t.crud.createOneClassroom();
    t.field("updateOneClassroom", {
      type: "Classroom",
      args: {
        where: "ClassroomWhereUniqueInput",
        data: "ClassroomUpdateInput"
      },
      resolve: async (root, { where, data }, context) => {

        const classroom = await context.photon.classrooms.findOne({
          where,
          select: { teachers: { select: { id: true } } }
        });

        return await context.photon.classrooms.update({
          where, data: {
            name: data.name,
            academicLevel: data.academicLevel,
            teachers: {
              disconnect: classroom.teachers,
              connect: data.teachers
            }
          }
        });
      }
    });

    t.field("deleteOneClassroom", {
      type: "Classroom",
      args: {
        where: "ClassroomWhereUniqueInput"
      },
      resolve: async (parent, { where }, ctx) => {

        const classroom = await ctx.photon.classrooms.findOne({
          where,
          select: {
            teachers: {
              select: {
                id: true
              }
            }

          }
        });

        await ctx.photon.classrooms.update({
          where,
          data: {
            teachers: {
              disconnect: classroom.teachers
            }
          }
        });
        return await ctx.photon.classrooms.delete({ where });
      }
    });

    t.field("deleteOneTeacher", {
      type: "Teacher",
      args: {
        where: "TeacherWhereUniqueInput"
      },
      resolve: async (root, { where }, ctx) => {
        const teacher = await ctx.photon.teachers.findOne({
          where,
          select: {
            classrooms: {
              select: {
                id: true
              }
            }

          }
        });
        await ctx.photon.teachers.update({
          where,
          data: {
            classrooms: {
              disconnect: teacher.classrooms
            }
          }
        });
        return ctx.photon.teachers.delete({ where });
      }
    });

    t.field("updateOneTeacher", {
      type: "Teacher",
      args: {
        where: "TeacherWhereUniqueInput",
        data: "UpdateOneTeacherInput"
      },
      resolve: async (parent, { where, data }, ctx) => {
        const teacher = await ctx.photon.teachers.update({
          where,
          data
        });
        console.log(teacher);
        return teacher;
      }
    });
    t.field("createOneTeacher", {
      type: "AuthPayload",
      args: {
        firstName: "String",
        lastName: "String",
        role: "Role",
        password: "String",
        school: "SchoolWhereUniqueInput",
        username: "String",
        avatar: stringArg({ required: false }),
        email: "String"
      },
      resolve: async (parent, { firstName, lastName, role, password, school, username, avatar, email }, ctx) => {
        const hashedPassword = await hash(password, 10);
        const teacher = await ctx.photon.teachers.create({
          data: {
            firstName,
            lastName,
            role,
            username,
            avatar,
            email,
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
