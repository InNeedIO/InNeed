import { JobOfferingWhereUniqueInput } from "../jobOffering/JobOfferingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobApplicantCreateInput = {
  job_offering_id: JobOfferingWhereUniqueInput;
  user_id: UserWhereUniqueInput;
};
