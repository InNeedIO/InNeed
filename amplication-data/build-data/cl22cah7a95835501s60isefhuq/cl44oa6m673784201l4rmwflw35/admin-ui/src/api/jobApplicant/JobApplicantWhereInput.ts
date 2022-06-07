import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JobOfferingWhereUniqueInput } from "../jobOffering/JobOfferingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobApplicantWhereInput = {
  id?: StringFilter;
  isAccepted?: BooleanNullableFilter;
  job_offering_id?: JobOfferingWhereUniqueInput;
  user_id?: UserWhereUniqueInput;
};
