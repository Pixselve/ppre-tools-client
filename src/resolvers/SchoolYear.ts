import { objectType } from '@prisma/nexus';

export const SchoolYear = objectType({
  name: 'SchoolYear',
  definition(t) {
    t.model.id();
    t.model.classroom();
    t.model.school();
    t.model.student();
    t.model.year();
    t.model.ppre();
  },
});
