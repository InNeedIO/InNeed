import { HousingOfferingWhereUniqueInput } from "../housingOffering/HousingOfferingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HousingApplicantUpdateInput = {
  house_offeringI_id?: HousingOfferingWhereUniqueInput;
  isAccepted?: boolean | null;
  user_id?: UserWhereUniqueInput;
};
