import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const HousingOfferingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Author ID" source="author_id" />
        <TextField label="City" source="city" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Rooms number" source="rooms_number" />
        <TextField label="Size" source="size" />
        <TextField label="Title" source="title" />
      </SimpleShowLayout>
    </Show>
  );
};
