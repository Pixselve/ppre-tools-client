import { objectType } from '@prisma/nexus';

export const PPRE = objectType({
  name: 'PPRE',
  definition(t) {
    t.model.id();
    t.model.checkups();
    t.model.createdAt();
    t.model.globalAssessment();
    t.model.nature();
    t.model.updatedAt();
    t.model.skills();
    t.model.schoolAttendance();
    t.model.schoolYear();
  },
});
