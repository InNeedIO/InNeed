import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobApplicantCreateNestedManyWithoutJobOfferingsInput } from "./JobApplicantCreateNestedManyWithoutJobOfferingsInput";

export type JobOfferingCreateInput = {
  author_id: UserWhereUniqueInput;
  city: string;
  description: string;
  job_applicants?: JobApplicantCreateNestedManyWithoutJobOfferingsInput;
  max_salary?: number | null;
  min_salary?: number | null;
  position_level?: string | null;
  title: string;
  working_mode: string;
};
