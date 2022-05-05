import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const JobApplicantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Job offering ID"
          source="job_offering_id"
        />
        <NumberInput step={1} label="User ID" source="user_id" />
      </SimpleForm>
    </Create>
  );
};
