import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import { HOUSINGOFFERING_TITLE_FIELD } from "../housingOffering/HousingOfferingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HousingApplicantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="House offering ID"
          source="housingoffering.id"
          reference="HousingOffering"
        >
          <TextField source={HOUSINGOFFERING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="isAccepted" source="isAccepted" />
        <ReferenceField label="User ID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
