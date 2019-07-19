import { enumType } from '@prisma/nexus';

export const Gender = enumType({
  name: 'Gender',
  members: ["MALE", "FEMALE", "OTHER"]
});
