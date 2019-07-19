import { objectType } from '@prisma/nexus';

export const Classroom = objectType({
  name: 'Classroom',
  definition(t) {
    t.model.id();
    t.model.teachers();
    t.model.schoolYears();
    t.model.school();
    t.model.academicLevel();
  },
});
