import { queryType } from '@prisma/nexus';

export const Query = queryType({
  definition(t) {
    t.crud.findOneSchool();
    t.crud.findManyAcademicLevel();
    t.crud.findOneAcademicLevel();
    t.crud.findManyTeacher();
  },
});
