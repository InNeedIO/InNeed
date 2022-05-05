import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type HousingApplicantWhereInput = {
  house_offeringI_id?: IntFilter;
  id?: StringFilter;
  user_id?: IntFilter;
};
