import { objectType } from '@prisma/nexus';

export const School = objectType({
  name: 'School',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.webstite();
    t.model.phone();
    t.model.teachers();
    t.model.classrooms();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.studentsClassYears();
    t.model.skills();
  },
});
