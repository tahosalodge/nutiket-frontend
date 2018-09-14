import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Router } from '@reach/router';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { getAuth } from 'selectors/auth';
import authShape from 'shapes/auth';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Welcome from 'components/Welcome';
import Dashboard from 'components/Dashboard';
import Register from 'components/Register';
import Login from 'components/Login';
import Users from 'components/Users';
import Lodges from 'components/Lodges';
import Profile from 'components/Profile';
import styles from './styles';

class App extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    auth: authShape.isRequired,
  };

  state = {
    open: false,
  };

  toggleDrawer = () => this.setState(prev => ({ open: !prev.open }));

  render() {
    const { classes, auth } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Header
            classes={classes}
            open={open}
            handleOpen={this.toggleDrawer}
            auth={auth}
          />
          <Navigation
            classes={classes}
            open={open}
            handleClose={this.toggleDrawer}
          />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <div className={classes.page}>
              <Router>
                <Welcome path="/" />
                <Dashboard path="/dashboard" />
                <Register path="/register" />
                <Login path="/login" />
                <Users path="/users" />
                <Lodges path="/lodges" />
                <Profile path="/profile" user={auth.user} />
              </Router>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state),
});
export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(App);
