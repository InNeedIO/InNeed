import { HousingApplicantUpdateManyWithoutUsersInput } from "./HousingApplicantUpdateManyWithoutUsersInput";
import { HousingOfferingUpdateManyWithoutUsersInput } from "./HousingOfferingUpdateManyWithoutUsersInput";
import { JobApplicantUpdateManyWithoutUsersInput } from "./JobApplicantUpdateManyWithoutUsersInput";
import { JobOfferingUpdateManyWithoutUsersInput } from "./JobOfferingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  description?: string | null;
  first_name?: string | null;
  housing_applicants?: HousingApplicantUpdateManyWithoutUsersInput;
  housing_offerings?: HousingOfferingUpdateManyWithoutUsersInput;
  job_applicants?: JobApplicantUpdateManyWithoutUsersInput;
  job_offerings?: JobOfferingUpdateManyWithoutUsersInput;
  last_name?: string | null;
  location?: string | null;
  password?: string;
  roles?: Array<string>;
  telephone_number?: string | null;
  username?: string;
};
