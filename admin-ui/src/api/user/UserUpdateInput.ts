export type UserUpdateInput = {
  description?: string | null;
  email?: string;
  first_name?: string;
  last_name?: string | null;
  location?: string;
  password?: string;
  roles?: Array<string>;
  telephone_number?: string;
  username?: string;
  user_type?: string;
};
