import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOUSINGOFFERING_TITLE_FIELD } from "../housingOffering/HousingOfferingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HousingApplicantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Housing applicants"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
