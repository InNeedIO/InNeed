import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const JobOfferingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Author ID" source="author_id" />
        <TextInput label="City" source="city" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Max salary" source="max_salary" />
        <NumberInput step={1} label="Min salary" source="min_salary" />
        <TextInput label="Position level" source="position_level" />
        <TextInput label="Title" source="title" />
        <TextInput label="Working mode" source="working_mode" />
      </SimpleForm>
    </Edit>
  );
};
