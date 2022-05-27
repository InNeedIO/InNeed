import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  description?: SortOrder;
  first_name?: SortOrder;
  id?: SortOrder;
  last_name?: SortOrder;
  location?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  telephone_number?: SortOrder;
  username?: SortOrder;
};
