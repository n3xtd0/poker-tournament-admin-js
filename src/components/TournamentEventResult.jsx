import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  Create,
  TextInput,
} from "react-admin";

export const TournamentEventResultList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="tournamentEventId" reference="tournamentEvents">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="playerId" reference="players">
        <TextField source="firstName" />
      </ReferenceField>
      <TextField source="registrationDate" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const TournamentEventResultEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="tournamentEventId" reference="tournamentEvents">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="playerId" reference="players">
        <SelectInput optionText={(record) => `${record.firstName} ${record.lastName}`} />
      </ReferenceInput>
      <TextInput source="registrationDate" type="date" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);

export const TournamentEventResultCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="tournamentEventId" reference="tournamentEvents">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="playerId" reference="players">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="registrationDate" type="date" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);
