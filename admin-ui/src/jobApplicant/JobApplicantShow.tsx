import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const JobApplicantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Job offering ID" source="job_offering_id" />
        <TextField label="User ID" source="user_id" />
      </SimpleShowLayout>
    </Show>
  );
};
