import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './MavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActtivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}} >
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);