import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const NeedEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsOffer" source="isOffer" />
        <SelectInput
          source="needType"
          label="NeedType"
          choices={[
            { label: "Home", value: "Home" },
            { label: "Work", value: "Work" },
            { label: "Transport", value: "Transport" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
