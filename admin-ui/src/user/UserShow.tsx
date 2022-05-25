import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { HOUSINGOFFERING_TITLE_FIELD } from "../housingOffering/HousingOfferingTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { JOBOFFERING_TITLE_FIELD } from "../jobOffering/JobOfferingTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="E-mail" source="email" />
        <TextField label="First Name" source="first_name" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="last_name" />
        <TextField label="Location" source="location" />
        <TextField label="Roles" source="roles" />
        <TextField label="Telephone number" source="telephone_number" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="HousingApplicant"
          target="UserId"
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
            <ReferenceField label="User ID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="HousingOffering"
          target="UserId"
          label="Housing offerings"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="JobApplicant"
          target="UserId"
          label="Job applicants"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Job offering ID"
              source="joboffering.id"
              reference="JobOffering"
            >
              <TextField source={JOBOFFERING_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User ID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="JobOffering"
          target="UserId"
          label="Job offerings"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Author ID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="City" source="city" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Max salary" source="max_salary" />
            <TextField label="Min salary" source="min_salary" />
            <TextField label="Position level" source="position_level" />
            <TextField label="Title" source="title" />
            <TextField label="Working mode" source="working_mode" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
