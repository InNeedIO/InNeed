import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobApplicantListRelationFilter } from "../jobApplicant/JobApplicantListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type JobOfferingWhereInput = {
  author_id?: UserWhereUniqueInput;
  city?: StringFilter;
  description?: StringFilter;
  id?: StringFilter;
  job_applicants?: JobApplicantListRelationFilter;
  max_salary?: IntNullableFilter;
  min_salary?: IntNullableFilter;
  position_level?: StringNullableFilter;
  title?: StringFilter;
  working_mode?: StringFilter;
};
