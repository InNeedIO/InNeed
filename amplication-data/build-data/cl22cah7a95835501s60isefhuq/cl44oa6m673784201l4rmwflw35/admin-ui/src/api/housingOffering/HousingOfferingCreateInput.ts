import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HousingApplicantCreateNestedManyWithoutHousingOfferingsInput } from "./HousingApplicantCreateNestedManyWithoutHousingOfferingsInput";

export type HousingOfferingCreateInput = {
  address: string;
  author_id: UserWhereUniqueInput;
  city: string;
  description: string;
  housingApplicants?: HousingApplicantCreateNestedManyWithoutHousingOfferingsInput;
  price: number;
  rooms_number: number;
  size: number;
  title: string;
};
