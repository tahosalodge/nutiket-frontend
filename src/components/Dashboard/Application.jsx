import React from 'react';
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
    fontSize: '10em',
    margin: 'auto',
    display: 'block',
  },
};

const Application = ({ classes }) => (
  <Button className={classes.button}>
    <Card>
      <CardContent>
        <SvgIcon className={classes.icon}>
          <PollIcon />
        </SvgIcon>
        <Typography
          gutterBottom
          variant="headline"
          component="h2"
          align="center"
        >
          Application Name
        </Typography>
      </CardContent>
    </Card>
  </Button>
);

Application.propTypes = {
  classes: classShape.isRequired,
};

export default withStyles(styles)(Application);
