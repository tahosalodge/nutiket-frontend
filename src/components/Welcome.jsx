import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  button: {
    margin: '1em',
  },
});

const Welcome = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="display1" gutterBottom>
      Welcome to Nutiket
    </Typography>
    <Button
      className={classes.button}
      variant="contained"
      color="secondary"
      component={Link}
      to="/login"
    >
      Login
    </Button>
    <Button
      className={classes.button}
      variant="contained"
      color="secondary"
      component={Link}
      to="/register"
    >
      Register
    </Button>
  </div>
);

Welcome.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
