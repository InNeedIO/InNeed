import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { HousingOfferingTitle } from "../housingOffering/HousingOfferingTitle";
import { UserTitle } from "../user/UserTitle";

export const HousingApplicantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="housingoffering.id"
          reference="HousingOffering"
          label="House offering ID"
        >
          <SelectInput optionText={HousingOfferingTitle} />
        </ReferenceInput>
        <BooleanInput label="isAccepted" source="isAccepted" />
        <ReferenceInput source="user.id" reference="User" label="User ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
