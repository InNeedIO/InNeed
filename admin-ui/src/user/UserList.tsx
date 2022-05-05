import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
