import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = ({ classes, open, handleOpen, auth }) => (
  <AppBar
    position="absolute"
    className={classNames(classes.appBar, open && classes.appBarShift)}
  >
    <Toolbar disableGutters={!open} className={classes.toolbar}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleOpen}
        className={classNames(
          classes.menuButton,
          open && classes.menuButtonHidden
        )}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="title"
        color="inherit"
        noWrap
        className={classes.title}
      >
        Dashboard
      </Typography>
      {auth.loggedIn && (
        <Fragment>
          <Typography variant="subheading" color="inherit">
            {`Welcome ${auth.user.fname}`}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Fragment>
      )}
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
};

export default Header;
