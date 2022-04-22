export type Need = {
  createdAt: Date;
  description: string;
  id: string;
  isOffer: boolean;
  needType?: "Home" | "Work" | "Transport";
  title: string;
  updatedAt: Date;
};
