import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HousingApplicantUpdateManyWithoutHousingOfferingsInput } from "./HousingApplicantUpdateManyWithoutHousingOfferingsInput";

export type HousingOfferingUpdateInput = {
  address?: string;
  author_id?: UserWhereUniqueInput;
  city?: string;
  description?: string;
  housingApplicants?: HousingApplicantUpdateManyWithoutHousingOfferingsInput;
  price?: number;
  rooms_number?: number;
  size?: number;
  title?: string;
};
