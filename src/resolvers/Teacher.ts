import { objectType } from '@prisma/nexus';

export const Teacher = objectType({
  name: 'Teacher',
  definition(t) {
    t.model.id();
    t.model.school();
    t.model.role();
    t.model.lastName();
    t.model.firstName();
    t.model.classroom();
    t.model.username()
  },
});
