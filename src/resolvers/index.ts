import { Query }                 from './Query';

import { Classroom }             from "./Classroom";
import { Teacher }               from "./Teacher";
import { Student }               from "./Student";

import { School }                from "./School";
import { Mutation }              from "./Mutation";
import { PPRE }                  from "./PPRE";
import { PPRECheckup }           from "./PPRECheckup";
import { Skill }                 from "./Skill";
import { AuthPayload }           from "./AuthPayload";
import { UpdateOneTeacherInput } from "./UpdateOneTeacherInput";
import { StudentClassYear }      from "./StudentClassYear";
import { ClassroomUpdateInput }  from "./ClassroomUpdateInput";


export const resolvers = {
  Query,
  Mutation,
  School,
  Student,
  Teacher,
  Classroom,
  StudentClassYear,
  PPRE,
  PPRECheckup,
  Skill,
  AuthPayload,
  UpdateOneTeacherInput,
  ClassroomUpdateInput
  // Role,
  // Gender
};
