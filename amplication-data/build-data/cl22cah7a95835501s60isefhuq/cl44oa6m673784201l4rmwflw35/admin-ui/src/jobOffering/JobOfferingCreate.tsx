import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { JobApplicantTitle } from "../jobApplicant/JobApplicantTitle";

export const JobOfferingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Author ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="City" source="city" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="job_applicants"
          reference="JobApplicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobApplicantTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Max salary" source="max_salary" />
        <NumberInput step={1} label="Min salary" source="min_salary" />
        <TextInput label="Position level" source="position_level" />
        <TextInput label="Title" source="title" />
        <TextInput label="Working mode" source="working_mode" />
      </SimpleForm>
    </Create>
  );
};
