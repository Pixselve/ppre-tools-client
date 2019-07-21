import { objectType } from '@prisma/nexus';

export const StudentClassYear = objectType({
  name: 'StudentClassYear',
  definition(t) {
    t.model.id();
    t.model.student();
    t.model.school();
    t.model.year();
    t.model.classroom();
    t.model.ppre();
  },
});
