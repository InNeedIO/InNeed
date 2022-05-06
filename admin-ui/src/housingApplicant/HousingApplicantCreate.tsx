import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HousingOfferingTitle } from "../housingOffering/HousingOfferingTitle";
import { UserTitle } from "../user/UserTitle";

export const HousingApplicantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="housingoffering.id"
          reference="HousingOffering"
          label="House offering ID"
        >
          <SelectInput optionText={HousingOfferingTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
