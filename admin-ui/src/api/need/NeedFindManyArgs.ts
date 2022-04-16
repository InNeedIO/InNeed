import { NeedWhereInput } from "./NeedWhereInput";
import { NeedOrderByInput } from "./NeedOrderByInput";

export type NeedFindManyArgs = {
  where?: NeedWhereInput;
  orderBy?: Array<NeedOrderByInput>;
  skip?: number;
  take?: number;
};
