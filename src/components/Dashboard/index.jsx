import React from 'react';
import Grid from '@material-ui/core/Grid';
import EventIcon from '@material-ui/icons/Event';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Application from './Application';

const Dashboard = () => (
  <div>
    <Grid container spacing={40}>
      <Grid item sm={6} md={4} lg={3}>
        <Application label="Elections" icon={() => <PersonAddIcon />} />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <Application label="Event Schedule" icon={() => <EventIcon />} />
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
