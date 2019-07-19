import { objectType } from '@prisma/nexus';

export const School = objectType({
  name: 'School',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.classrooms();
    t.model.phone();
    t.model.schoolYears();
    t.model.teachers();
    t.model.website();
  },
});
