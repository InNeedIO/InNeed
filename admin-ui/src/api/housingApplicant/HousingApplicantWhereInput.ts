import { HousingOfferingWhereUniqueInput } from "../housingOffering/HousingOfferingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HousingApplicantWhereInput = {
  house_offeringI_id?: HousingOfferingWhereUniqueInput;
  id?: StringFilter;
  user_id?: UserWhereUniqueInput;
};
