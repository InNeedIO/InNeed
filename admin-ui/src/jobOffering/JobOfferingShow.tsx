import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { JOBOFFERING_TITLE_FIELD } from "./JobOfferingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const JobOfferingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="JobApplicant"
          target="JobOfferingId"
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
      </SimpleShowLayout>
    </Show>
  );
};
