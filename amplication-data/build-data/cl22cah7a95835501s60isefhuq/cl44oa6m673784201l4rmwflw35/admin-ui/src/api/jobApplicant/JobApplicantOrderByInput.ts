import { SortOrder } from "../../util/SortOrder";

export type JobApplicantOrderByInput = {
  id?: SortOrder;
  isAccepted?: SortOrder;
  job_offering_idId?: SortOrder;
  user_idId?: SortOrder;
};
