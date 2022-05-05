import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const HousingApplicantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="House offering ID" source="house_offeringI_id" />
        <TextField label="ID" source="id" />
        <TextField label="User ID" source="user_id" />
      </SimpleShowLayout>
    </Show>
  );
};
