import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type NeedWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  isOffer?: BooleanFilter;
  needType?: "Home" | "Work" | "Transport";
  title?: StringFilter;
};
