import { queryType } from '@prisma/nexus';

export const Query = queryType({
  definition(t) {
    t.crud.findOneSchool();
    t.crud.findManyTeacher();
    t.crud.findOneTeacher();
    t.crud.findManySchool();
    t.crud.findManyClassroom();
  },
});
