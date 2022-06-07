import { HousingOfferingWhereUniqueInput } from "../housingOffering/HousingOfferingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HousingApplicantWhereInput = {
  house_offeringI_id?: HousingOfferingWhereUniqueInput;
  id?: StringFilter;
  isAccepted?: BooleanNullableFilter;
  user_id?: UserWhereUniqueInput;
};
