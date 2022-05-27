import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HousingApplicantListRelationFilter } from "../housingApplicant/HousingApplicantListRelationFilter";
import { HousingOfferingListRelationFilter } from "../housingOffering/HousingOfferingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobApplicantListRelationFilter } from "../jobApplicant/JobApplicantListRelationFilter";
import { JobOfferingListRelationFilter } from "../jobOffering/JobOfferingListRelationFilter";

export type UserWhereInput = {
  description?: StringNullableFilter;
  first_name?: StringNullableFilter;
  housing_applicants?: HousingApplicantListRelationFilter;
  housing_offerings?: HousingOfferingListRelationFilter;
  id?: StringFilter;
  job_applicants?: JobApplicantListRelationFilter;
  job_offerings?: JobOfferingListRelationFilter;
  last_name?: StringNullableFilter;
  location?: StringNullableFilter;
  telephone_number?: StringNullableFilter;
  username?: StringFilter;
};
