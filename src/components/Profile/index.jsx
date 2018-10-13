import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';
import { Formik, Form } from 'formik';
import { Paper, Typography, withStyles, Button } from '@material-ui/core';
import TextField from 'components/Form/TextField';
import { updateUser } from 'state/modules/user';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  inputs: {
    margin: theme.spacing.unit * 2,
  },
});

const Profile = ({ classes, user, ...props }) => (
  <Paper className={classes.root}>
    <Typography variant="display1">Profile</Typography>
    <Formik
      onSubmit={values => props.updateUser(user._id, values)}
      initialValues={user}
    >
      {({ handleSubmit }) => (
        <Form>
          <TextField
            autoFocus
            margin="dense"
            name="fname"
            label="First Name"
            type="text"
            className={classes.inputs}
          />
          <br />
          <TextField
            margin="dense"
            name="lname"
            label="Last Name"
            type="text"
            className={classes.inputs}
          />
          <br />
          <TextField
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            className={classes.inputs}
          />
          <br />
          <TextField
            margin="dense"
            name="password"
            label="New Password"
            type="password"
            className={classes.inputs}
          />
          <br />
          <Button
            onClick={handleSubmit}
            className={classes.inputs}
            variant="raised"
            color="secondary"
          >
            Update
          </Button>
        </Form>
      )}
    </Formik>
  </Paper>
);

export default compose(
  connect(
    null,
    { updateUser }
  ),
  withStyles(styles)
)(Profile);
