import { objectType } from '@prisma/nexus';

export const Skill = objectType({
  name: 'Skill',
  definition(t) {
    t.model.id();
    t.model.school();
    t.model.name();
    t.model.parent();
    t.model.children();
    t.model.skillsConcernedPPRE();
    t.model.skillsToWorkPPRE();
  },
});
