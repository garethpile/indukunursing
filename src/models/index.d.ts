import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ApplicantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Applicant {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly mobileNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Applicant, ApplicantMetaData>);
  static copyOf(source: Applicant, mutator: (draft: MutableModel<Applicant, ApplicantMetaData>) => MutableModel<Applicant, ApplicantMetaData> | void): Applicant;
}