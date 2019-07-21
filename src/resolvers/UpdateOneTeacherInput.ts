import { inputObjectType } from "@prisma/nexus";

export const UpdateOneTeacherInput = inputObjectType({
  name: "UpdateOneTeacherInput",
  definition(t) {
    t.string("username");
    t.string("firstName");
    t.string("lastName");
    t.string("avatar");
    t.string("email");
  },
});