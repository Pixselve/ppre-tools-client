import { objectType } from '@prisma/nexus';

export const Student = objectType({
  name: 'Student',
  definition(t) {
    t.model.id();
    t.model.firstName();
    t.model.lastName();
    t.model.username()
    t.model.schoolYears();
    t.model.gender();
    t.model.birthDate();
  },
});
