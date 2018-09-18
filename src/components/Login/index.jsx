import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik, Form } from 'formik';
import { Link, Redirect } from '@reach/router';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from 'components/Form/TextField';
import { login } from 'state/modules/auth';
import authShape from 'shapes/auth';

const Login = ({ fullScreen, ...props }) => {
  if (props.auth.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Dialog fullScreen={fullScreen} open aria-labelledby="login">
      <Formik onSubmit={values => props.login(values)}>
        {({ handleSubmit }) => (
          <Form>
            <DialogTitle id="login">Log In</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
              />
              <TextField
                margin="dense"
                name="password"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button component={Link} to="/" color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

Login.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  auth: authShape.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default compose(
  connect(
    mapStateToProps,
    { login }
  ),
  withMobileDialog()
)(Login);
