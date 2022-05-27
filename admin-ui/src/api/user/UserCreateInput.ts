import { HousingApplicantCreateNestedManyWithoutUsersInput } from "./HousingApplicantCreateNestedManyWithoutUsersInput";
import { HousingOfferingCreateNestedManyWithoutUsersInput } from "./HousingOfferingCreateNestedManyWithoutUsersInput";
import { JobApplicantCreateNestedManyWithoutUsersInput } from "./JobApplicantCreateNestedManyWithoutUsersInput";
import { JobOfferingCreateNestedManyWithoutUsersInput } from "./JobOfferingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  description?: string | null;
  first_name?: string | null;
  housing_applicants?: HousingApplicantCreateNestedManyWithoutUsersInput;
  housing_offerings?: HousingOfferingCreateNestedManyWithoutUsersInput;
  job_applicants?: JobApplicantCreateNestedManyWithoutUsersInput;
  job_offerings?: JobOfferingCreateNestedManyWithoutUsersInput;
  last_name?: string | null;
  location?: string | null;
  password: string;
  roles: Array<string>;
  telephone_number?: string | null;
  username: string;
};
