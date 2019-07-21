import { objectType } from '@prisma/nexus';

export const PPRECheckup = objectType({
  name: 'PPRECheckup',
  definition(t) {
    t.model.id();
    t.model.ppre();
    t.model.phase();
    t.model.assessment();
    t.model.skillWorked();
  },
});
