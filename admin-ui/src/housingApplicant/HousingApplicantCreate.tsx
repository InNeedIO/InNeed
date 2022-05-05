import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const HousingApplicantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="House offering ID"
          source="house_offeringI_id"
        />
        <NumberInput step={1} label="User ID" source="user_id" />
      </SimpleForm>
    </Create>
  );
};
