import { Need as TNeed } from "../api/need/Need";

export const NEED_TITLE_FIELD = "id";

export const NeedTitle = (record: TNeed): string => {
  return record.id || record.id;
};
