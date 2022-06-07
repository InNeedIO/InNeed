import { JobOfferingWhereUniqueInput } from "../jobOffering/JobOfferingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobApplicantUpdateInput = {
  job_offering_id?: JobOfferingWhereUniqueInput;
  user_id?: UserWhereUniqueInput;
};
