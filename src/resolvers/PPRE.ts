import { objectType } from '@prisma/nexus';

export const PPRE = objectType({
  name: 'PPRE',
  definition(t) {
    t.model.id();
    t.model.studentsClassYear();
    t.model.globalAssessment();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.nature();
    t.model.schoolAttendance();
    t.model.checkups();
    t.model.skillsConcerned();
    t.model.skillsToWork();
  },
});
