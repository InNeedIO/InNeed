import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { JOBOFFERING_TITLE_FIELD } from "../jobOffering/JobOfferingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const JobApplicantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
