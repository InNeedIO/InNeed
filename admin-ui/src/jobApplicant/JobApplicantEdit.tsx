import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const JobApplicantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Job offering ID"
          source="job_offering_id"
        />
        <NumberInput step={1} label="User ID" source="user_id" />
      </SimpleForm>
    </Edit>
  );
};
