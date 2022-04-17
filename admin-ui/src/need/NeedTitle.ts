import { Need as TNeed } from "../api/need/Need";

export const NEED_TITLE_FIELD = "title";

export const NeedTitle = (record: TNeed): string => {
  return record.title || record.id;
};
