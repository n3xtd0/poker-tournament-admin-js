import { List, Datagrid, TextField, EmailField, Edit, Create, SimpleForm, TextInput, DateInput } from "react-admin";

export const PlayerList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export const PlayerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="email" />
      <DateInput source="dateOfBirth" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Edit>
);

export const PlayerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="email" />
      <DateInput source="dateOfBirth" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Create>
);
