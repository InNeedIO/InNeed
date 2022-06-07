import { JobOffering } from "../jobOffering/JobOffering";
import { User } from "../user/User";

export type JobApplicant = {
  id: string;
  isAccepted: boolean | null;
  job_offering_id?: JobOffering;
  user_id?: User;
};
