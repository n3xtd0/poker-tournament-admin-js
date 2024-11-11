import { Admin, Resource } from 'react-admin';
import { TournamentEventResultCreate, TournamentEventResultEdit, TournamentEventResultList } from './components/TournamentEventResult';
import { mockDataProvider } from './mockDataProvider';
import { PlayerList, PlayerEdit, PlayerCreate } from './components/Player';
import { TournamentEventList, TournamentEventEdit, TournamentEventCreate } from './components/TournamentEvent';
import { TournamentTypeList, TournamentTypeEdit, TournamentTypeCreate } from './components/TournamentType';

function App() {
  return (
    <Admin dataProvider={mockDataProvider}>
      <Resource name="players" list={PlayerList} edit={PlayerEdit} create={PlayerCreate} />
      <Resource name="tournamentEvents" list={TournamentEventList} edit={TournamentEventEdit} create={TournamentEventCreate} />
      <Resource name="tournamentTypes" list={TournamentTypeList} edit={TournamentTypeEdit} create={TournamentTypeCreate} />
      <Resource name="tournamentEventResults" list={TournamentEventResultList} edit={TournamentEventResultEdit} create={TournamentEventResultCreate} />
    </Admin>
  );
}

export default App;