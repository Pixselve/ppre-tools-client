import { objectType } from '@prisma/nexus';

export const Classroom = objectType({
  name: 'Classroom',
  definition(t) {
    t.model.id();
    t.model.school();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.year();
    t.model.name();
    t.model.teachers();
    t.model.studentsClassYears();
    t.model.academicLevel();
  },
});
