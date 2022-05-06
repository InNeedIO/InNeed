import { User } from "../user/User";
import { HousingApplicant } from "../housingApplicant/HousingApplicant";

export type HousingOffering = {
  address: string;
  author_id?: User;
  city: string;
  description: string;
  housingApplicants?: Array<HousingApplicant>;
  id: string;
  price: number;
  rooms_number: number;
  size: number;
  title: string;
};
