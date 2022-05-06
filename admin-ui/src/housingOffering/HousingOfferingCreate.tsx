import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { HousingApplicantTitle } from "../housingApplicant/HousingApplicantTitle";

export const HousingOfferingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput source="user.id" reference="User" label="Author ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="City" source="city" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="housingApplicants"
          reference="HousingApplicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HousingApplicantTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Price" source="price" />
        <NumberInput step={1} label="Rooms number" source="rooms_number" />
        <NumberInput label="Size" source="size" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
