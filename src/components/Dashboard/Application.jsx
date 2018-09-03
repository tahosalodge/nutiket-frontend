import React from 'react';
import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  SvgIcon,
  Typography,
  Button,
} from '@material-ui/core';
import PollIcon from '@material-ui/icons/Poll';
import { withStyles } from '@material-ui/core/styles';
import classShape from 'shapes/classes';

const styles = {
  button: {
    textTransform: 'none',
  },
  icon: {
    fontSize: '7em',
    margin: 'auto',
    display: 'block',
    minWidth: '200px',
  },
};

const Application = ({ classes, label, icon }) => (
  <Button className={classes.button}>
    <Card>
      <CardContent>
        <SvgIcon className={classes.icon} color="secondary">
          {icon()}
        </SvgIcon>
        <Typography
          gutterBottom
          variant="headline"
          component="h2"
          align="center"
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  </Button>
);

Application.propTypes = {
  classes: classShape.isRequired,
  label: PropTypes.string,
  icon: PropTypes.func,
};

Application.defaultProps = {
  label: 'Application',
  icon: () => <PollIcon />
}

export default withStyles(styles)(Application);
