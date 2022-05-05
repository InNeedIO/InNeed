import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const JobOfferingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Author ID" source="author_id" />
        <TextField label="City" source="city" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Max salary" source="max_salary" />
        <TextField label="Min salary" source="min_salary" />
        <TextField label="Position level" source="position_level" />
        <TextField label="Title" source="title" />
        <TextField label="Working mode" source="working_mode" />
      </SimpleShowLayout>
    </Show>
  );
};
