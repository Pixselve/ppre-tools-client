import { Query }         from './Query';
import { AcademicLevel } from "./AcademicLevel";
import { Classroom }     from "./Classroom";
import { Teacher }       from "./Teacher";
import { Student }       from "./Student";
import { SchoolYear }    from "./SchoolYear";
import { School }        from "./School";
import { Mutation }      from "./Mutation";
import { PPRE }          from "./PPRE";
import { PPRECheckup }   from "./PPRECheckup";
import { Skill }         from "./Skill";
import { AuthPayload }   from "./AuthPayload";


export const resolvers = {
  Query,
  Mutation,
  School,
  SchoolYear,
  Student,
  Teacher,
  Classroom,
  AcademicLevel,
  PPRE,
  PPRECheckup,
  Skill,
  AuthPayload
  // Role,
  // Gender
};
