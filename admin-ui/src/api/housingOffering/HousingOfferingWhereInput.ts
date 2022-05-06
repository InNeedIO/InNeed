import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HousingApplicantListRelationFilter } from "../housingApplicant/HousingApplicantListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type HousingOfferingWhereInput = {
  address?: StringFilter;
  author_id?: UserWhereUniqueInput;
  city?: StringFilter;
  description?: StringFilter;
  housingApplicants?: HousingApplicantListRelationFilter;
  id?: StringFilter;
  price?: IntFilter;
  rooms_number?: IntFilter;
  size?: FloatFilter;
  title?: StringFilter;
};
