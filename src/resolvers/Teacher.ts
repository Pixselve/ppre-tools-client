import { objectType } from '@prisma/nexus';

export const Teacher = objectType({
  name: 'Teacher',
  definition(t) {
    t.model.id();
    t.model.firstName();
    t.model.lastName();
    t.model.school();
    t.model.avatar();
    t.model.role();
    t.model.username();
    t.model.email();
    t.model.password();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.classrooms();
  },
});
