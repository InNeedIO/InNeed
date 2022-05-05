import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type JobApplicantWhereInput = {
  id?: StringFilter;
  job_offering_id?: IntFilter;
  user_id?: IntFilter;
};
