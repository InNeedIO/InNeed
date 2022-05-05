import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HousingOfferingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput step={1} label="Author ID" source="author_id" />
        <TextInput label="City" source="city" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Price" source="price" />
        <NumberInput step={1} label="Rooms number" source="rooms_number" />
        <NumberInput label="Size" source="size" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
