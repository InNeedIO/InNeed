import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { HousingApplicantListRelationFilter } from "../housingApplicant/HousingApplicantListRelationFilter";
import { HousingOfferingListRelationFilter } from "../housingOffering/HousingOfferingListRelationFilter";
import { JobApplicantListRelationFilter } from "../jobApplicant/JobApplicantListRelationFilter";
import { JobOfferingListRelationFilter } from "../jobOffering/JobOfferingListRelationFilter";

export type UserWhereInput = {
  description?: StringNullableFilter;
  email?: StringFilter;
  first_name?: StringNullableFilter;
  housing_applicants?: HousingApplicantListRelationFilter;
  housing_offerings?: HousingOfferingListRelationFilter;
  id?: StringFilter;
  job_applicants?: JobApplicantListRelationFilter;
  job_offerings?: JobOfferingListRelationFilter;
  last_name?: StringNullableFilter;
  location?: StringFilter;
  telephone_number?: StringFilter;
  username?: StringFilter;
};
