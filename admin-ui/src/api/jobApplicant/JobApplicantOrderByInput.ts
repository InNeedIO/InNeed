import { SortOrder } from "../../util/SortOrder";

export type JobApplicantOrderByInput = {
  id?: SortOrder;
  job_offering_id?: SortOrder;
  user_id?: SortOrder;
};
