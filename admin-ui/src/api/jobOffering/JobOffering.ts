import { User } from "../user/User";
import { JobApplicant } from "../jobApplicant/JobApplicant";

export type JobOffering = {
  author_id?: User;
  city: string;
  description: string;
  id: string;
  job_applicants?: Array<JobApplicant>;
  max_salary: number | null;
  min_salary: number | null;
  position_level: string | null;
  title: string;
  working_mode: string;
};
