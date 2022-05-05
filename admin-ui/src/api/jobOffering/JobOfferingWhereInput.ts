import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type JobOfferingWhereInput = {
  author_id?: IntFilter;
  city?: StringFilter;
  description?: StringFilter;
  id?: StringFilter;
  max_salary?: IntNullableFilter;
  min_salary?: IntNullableFilter;
  position_level?: StringNullableFilter;
  title?: StringFilter;
  working_mode?: StringFilter;
};
