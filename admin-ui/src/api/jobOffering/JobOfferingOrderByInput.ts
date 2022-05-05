import { SortOrder } from "../../util/SortOrder";

export type JobOfferingOrderByInput = {
  author_id?: SortOrder;
  city?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  max_salary?: SortOrder;
  min_salary?: SortOrder;
  position_level?: SortOrder;
  title?: SortOrder;
  working_mode?: SortOrder;
};
