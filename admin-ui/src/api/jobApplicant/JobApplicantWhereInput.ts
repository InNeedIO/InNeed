import { StringFilter } from "../../util/StringFilter";
import { JobOfferingWhereUniqueInput } from "../jobOffering/JobOfferingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobApplicantWhereInput = {
  id?: StringFilter;
  job_offering_id?: JobOfferingWhereUniqueInput;
  user_id?: UserWhereUniqueInput;
};
