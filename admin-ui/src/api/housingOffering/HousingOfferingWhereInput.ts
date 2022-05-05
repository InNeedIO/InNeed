import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type HousingOfferingWhereInput = {
  address?: StringFilter;
  author_id?: IntFilter;
  city?: StringFilter;
  description?: StringFilter;
  id?: StringFilter;
  price?: IntFilter;
  rooms_number?: IntFilter;
  size?: FloatFilter;
  title?: StringFilter;
};
