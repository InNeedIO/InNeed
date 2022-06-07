import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { HousingApplicantTitle } from "../housingApplicant/HousingApplicantTitle";
import { HousingOfferingTitle } from "../housingOffering/HousingOfferingTitle";
import { JobApplicantTitle } from "../jobApplicant/JobApplicantTitle";
import { JobOfferingTitle } from "../jobOffering/JobOfferingTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="First Name" source="first_name" />
        <ReferenceArrayInput
          source="housing_applicants"
          reference="HousingApplicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HousingApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="housing_offerings"
          reference="HousingOffering"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HousingOfferingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="job_applicants"
          reference="JobApplicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="job_offerings"
          reference="JobOffering"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobOfferingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="last_name" />
        <TextInput label="Location" source="location" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Telephone number" source="telephone_number" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
