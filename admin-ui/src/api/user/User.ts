import { HousingApplicant } from "../housingApplicant/HousingApplicant";
import { HousingOffering } from "../housingOffering/HousingOffering";
import { JobApplicant } from "../jobApplicant/JobApplicant";
import { JobOffering } from "../jobOffering/JobOffering";

export type User = {
  description: string | null;
  email: string;
  first_name: string;
  housing_applicants?: Array<HousingApplicant>;
  housing_offerings?: Array<HousingOffering>;
  id: string;
  job_applicants?: Array<JobApplicant>;
  job_offerings?: Array<JobOffering>;
  last_name: string;
  location: string;
  roles: Array<string>;
  telephone_number: string;
  username: string;
};
