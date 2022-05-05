import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  description?: StringNullableFilter;
  email?: StringFilter;
  first_name?: StringFilter;
  id?: StringFilter;
  last_name?: StringNullableFilter;
  location?: StringFilter;
  telephone_number?: StringFilter;
  username?: StringFilter;
  user_type?: StringFilter;
};
