// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NursingEquipment, NursingCases, NursingResponsibilities, NursingWorkSummary, NursingWorkExperience, ImmigrationInformation, ContactDetails, Children, Address, Applicant } = initSchema(schema);

export {
  NursingEquipment,
  NursingCases,
  NursingResponsibilities,
  NursingWorkSummary,
  NursingWorkExperience,
  ImmigrationInformation,
  ContactDetails,
  Children,
  Address,
  Applicant
};