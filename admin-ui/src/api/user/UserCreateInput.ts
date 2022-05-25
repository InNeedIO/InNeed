import { HousingApplicantCreateNestedManyWithoutUsersInput } from "./HousingApplicantCreateNestedManyWithoutUsersInput";
import { HousingOfferingCreateNestedManyWithoutUsersInput } from "./HousingOfferingCreateNestedManyWithoutUsersInput";
import { JobApplicantCreateNestedManyWithoutUsersInput } from "./JobApplicantCreateNestedManyWithoutUsersInput";
import { JobOfferingCreateNestedManyWithoutUsersInput } from "./JobOfferingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  description?: string | null;
  email: string;
  first_name: string;
  housing_applicants?: HousingApplicantCreateNestedManyWithoutUsersInput;
  housing_offerings?: HousingOfferingCreateNestedManyWithoutUsersInput;
  job_applicants?: JobApplicantCreateNestedManyWithoutUsersInput;
  job_offerings?: JobOfferingCreateNestedManyWithoutUsersInput;
  last_name: string;
  location: string;
  password: string;
  roles: Array<string>;
  telephone_number: string;
  username: string;
  user_type: string;
};
