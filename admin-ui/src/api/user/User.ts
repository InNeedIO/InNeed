import { HousingApplicant } from "../housingApplicant/HousingApplicant";
import { HousingOffering } from "../housingOffering/HousingOffering";
import { JobApplicant } from "../jobApplicant/JobApplicant";
import { JobOffering } from "../jobOffering/JobOffering";

export type User = {
  description: string | null;
  first_name: string | null;
  housing_applicants?: Array<HousingApplicant>;
  housing_offerings?: Array<HousingOffering>;
  id: string;
  job_applicants?: Array<JobApplicant>;
  job_offerings?: Array<JobOffering>;
  last_name: string | null;
  location: string | null;
  roles: Array<string>;
  telephone_number: string | null;
  username: string;
};
