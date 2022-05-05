import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const HousingApplicantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="House offering ID"
          source="house_offeringI_id"
        />
        <NumberInput step={1} label="User ID" source="user_id" />
      </SimpleForm>
    </Edit>
  );
};
