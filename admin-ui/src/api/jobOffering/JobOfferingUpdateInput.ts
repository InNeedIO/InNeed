import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobApplicantUpdateManyWithoutJobOfferingsInput } from "./JobApplicantUpdateManyWithoutJobOfferingsInput";

export type JobOfferingUpdateInput = {
  author_id?: UserWhereUniqueInput;
  city?: string;
  description?: string;
  job_applicants?: JobApplicantUpdateManyWithoutJobOfferingsInput;
  max_salary?: number | null;
  min_salary?: number | null;
  position_level?: string | null;
  title?: string;
  working_mode?: string;
};
