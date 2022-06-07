import { HousingOffering } from "../housingOffering/HousingOffering";
import { User } from "../user/User";

export type HousingApplicant = {
  house_offeringI_id?: HousingOffering;
  id: string;
  isAccepted: boolean | null;
  user_id?: User;
};
