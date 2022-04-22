import { SortOrder } from "../../util/SortOrder";

export type NeedOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isOffer?: SortOrder;
  needType?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
