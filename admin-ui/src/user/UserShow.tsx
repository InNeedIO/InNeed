import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="E-mail" source="email" />
        <TextField label="First Name" source="first_name" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="last_name" />
        <TextField label="Location" source="location" />
        <TextField label="Roles" source="roles" />
        <TextField label="Telephone number" source="telephone_number" />
        <TextField label="Username" source="username" />
        <TextField label="User type" source="user_type" />
      </SimpleShowLayout>
    </Show>
  );
};
