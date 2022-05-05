import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HousingApplicantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Housing applicants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="House offering ID" source="house_offeringI_id" />
        <TextField label="ID" source="id" />
        <TextField label="User ID" source="user_id" />
      </Datagrid>
    </List>
  );
};
