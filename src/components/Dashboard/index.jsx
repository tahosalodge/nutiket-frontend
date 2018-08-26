import React from 'react';
import Grid from '@material-ui/core/Grid';
import Application from './Application';

const Dashboard = () => (
  <div>
    <Grid container spacing={40}>
      <Grid item sm={6} md={4} lg={3}>
        <Application />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <Application />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <Application />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <Application />
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
