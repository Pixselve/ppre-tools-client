import { objectType } from '@prisma/nexus';

export const AcademicLevel = objectType({
  name: 'AcademicLevel',
  definition(t) {
    t.model.id();
    t.model.classrooms();
    t.model.name();
  },
});
