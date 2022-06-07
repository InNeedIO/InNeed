import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { HOUSINGOFFERING_TITLE_FIELD } from "./HousingOfferingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HousingOfferingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <ReferenceField label="Author ID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="City" source="city" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Rooms number" source="rooms_number" />
        <TextField label="Size" source="size" />
        <TextField label="Title" source="title" />
        <ReferenceManyField
          reference="HousingApplicant"
          target="HousingOfferingId"
          label="Housing applicants"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
