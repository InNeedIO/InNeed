export type JobOfferingUpdateInput = {
  author_id?: number;
  city?: string;
  description?: string;
  max_salary?: number | null;
  min_salary?: number | null;
  position_level?: string | null;
  title?: string;
  working_mode?: string;
};
