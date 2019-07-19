import { enumType, objectType } from '@prisma/nexus';

export const Role = enumType({
  name: 'Role',
  members: ["DEFAULT", "ADMIN", "MANAGER"]
});
