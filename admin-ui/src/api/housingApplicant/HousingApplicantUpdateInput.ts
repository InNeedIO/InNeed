import { HousingOfferingWhereUniqueInput } from "../housingOffering/HousingOfferingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HousingApplicantUpdateInput = {
  house_offeringI_id?: HousingOfferingWhereUniqueInput;
  user_id?: UserWhereUniqueInput;
};
