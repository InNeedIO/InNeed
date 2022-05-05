import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JobOfferingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Job offerings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Author ID" source="author_id" />
        <TextField label="City" source="city" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Max salary" source="max_salary" />
        <TextField label="Min salary" source="min_salary" />
        <TextField label="Position level" source="position_level" />
        <TextField label="Title" source="title" />
        <TextField label="Working mode" source="working_mode" />
      </Datagrid>
    </List>
  );
};
