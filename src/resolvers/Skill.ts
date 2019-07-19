import { objectType } from '@prisma/nexus';

export const Skill = objectType({
  name: 'Skill',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.parent();
    t.model.ppre();
    t.model.ppreCheckup();
    t.model.skill();
  },
});
