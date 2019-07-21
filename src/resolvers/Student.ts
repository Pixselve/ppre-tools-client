import { objectType } from '@prisma/nexus';

export const Student = objectType({
  name: 'Student',
  definition(t) {
    t.model.id();
    t.model.classYears();
    t.model.firstName();
    t.model.lastName();
    t.model.birthDate();
    t.model.gender();
    t.model.username();
    t.model.password();
  },
});
