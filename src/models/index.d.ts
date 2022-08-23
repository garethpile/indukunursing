import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NursingEquipmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NursingCasesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NursingResponsibilitiesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NursingWorkSummaryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NursingWorkExperienceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImmigrationInformationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContactDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChildrenMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ApplicantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class NursingEquipment {
  readonly id: string;
  readonly equipment?: string | null;
  readonly description?: string | null;
  readonly nursingworkexperienceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NursingEquipment, NursingEquipmentMetaData>);
  static copyOf(source: NursingEquipment, mutator: (draft: MutableModel<NursingEquipment, NursingEquipmentMetaData>) => MutableModel<NursingEquipment, NursingEquipmentMetaData> | void): NursingEquipment;
}

export declare class NursingCases {
  readonly id: string;
  readonly case?: string | null;
  readonly description?: string | null;
  readonly nursingworkexperienceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NursingCases, NursingCasesMetaData>);
  static copyOf(source: NursingCases, mutator: (draft: MutableModel<NursingCases, NursingCasesMetaData>) => MutableModel<NursingCases, NursingCasesMetaData> | void): NursingCases;
}

export declare class NursingResponsibilities {
  readonly id: string;
  readonly responsibility?: string | null;
  readonly description?: string | null;
  readonly nursingworkexperienceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NursingResponsibilities, NursingResponsibilitiesMetaData>);
  static copyOf(source: NursingResponsibilities, mutator: (draft: MutableModel<NursingResponsibilities, NursingResponsibilitiesMetaData>) => MutableModel<NursingResponsibilities, NursingResponsibilitiesMetaData> | void): NursingResponsibilities;
}

export declare class NursingWorkSummary {
  readonly id: string;
  readonly summarySkillsAttributes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NursingWorkSummary, NursingWorkSummaryMetaData>);
  static copyOf(source: NursingWorkSummary, mutator: (draft: MutableModel<NursingWorkSummary, NursingWorkSummaryMetaData>) => MutableModel<NursingWorkSummary, NursingWorkSummaryMetaData> | void): NursingWorkSummary;
}

export declare class NursingWorkExperience {
  readonly id: string;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly hospital?: string | null;
  readonly hospitalLocation?: string | null;
  readonly bedCapacity?: number | null;
  readonly nurseToPatientRatio?: string | null;
  readonly NursingResponsibilities?: (NursingResponsibilities | null)[] | null;
  readonly NursingCases?: (NursingCases | null)[] | null;
  readonly NursingEquipments?: (NursingEquipment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NursingWorkExperience, NursingWorkExperienceMetaData>);
  static copyOf(source: NursingWorkExperience, mutator: (draft: MutableModel<NursingWorkExperience, NursingWorkExperienceMetaData>) => MutableModel<NursingWorkExperience, NursingWorkExperienceMetaData> | void): NursingWorkExperience;
}

export declare class ImmigrationInformation {
  readonly id: string;
  readonly familyImmigration?: boolean | null;
  readonly IELTS?: boolean | null;
  readonly NCLEX?: boolean | null;
  readonly visaScreen?: boolean | null;
  readonly yearsRegisteredNurse?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ImmigrationInformation, ImmigrationInformationMetaData>);
  static copyOf(source: ImmigrationInformation, mutator: (draft: MutableModel<ImmigrationInformation, ImmigrationInformationMetaData>) => MutableModel<ImmigrationInformation, ImmigrationInformationMetaData> | void): ImmigrationInformation;
}

export declare class ContactDetails {
  readonly id: string;
  readonly emailAddress?: string | null;
  readonly contactNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ContactDetails, ContactDetailsMetaData>);
  static copyOf(source: ContactDetails, mutator: (draft: MutableModel<ContactDetails, ContactDetailsMetaData>) => MutableModel<ContactDetails, ContactDetailsMetaData> | void): ContactDetails;
}

export declare class Children {
  readonly id: string;
  readonly lastName?: string | null;
  readonly firstName?: string | null;
  readonly gender?: string | null;
  readonly Age?: number | null;
  readonly applicantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Children, ChildrenMetaData>);
  static copyOf(source: Children, mutator: (draft: MutableModel<Children, ChildrenMetaData>) => MutableModel<Children, ChildrenMetaData> | void): Children;
}

export declare class Address {
  readonly id: string;
  readonly addressType?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly addressLine3?: string | null;
  readonly suburb?: string | null;
  readonly province?: string | null;
  readonly country?: string | null;
  readonly postalCode?: string | null;
  readonly applicantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class Applicant {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly gender?: string | null;
  readonly nationality?: string | null;
  readonly married?: boolean | null;
  readonly qualification?: string | null;
  readonly Addresses?: (Address | null)[] | null;
  readonly ImmigrationInformation?: ImmigrationInformation | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly applicantImmigrationInformationId?: string | null;
  constructor(init: ModelInit<Applicant, ApplicantMetaData>);
  static copyOf(source: Applicant, mutator: (draft: MutableModel<Applicant, ApplicantMetaData>) => MutableModel<Applicant, ApplicantMetaData> | void): Applicant;
}