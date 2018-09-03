import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import { listUsers, deleteUser } from 'state/modules/user';
import { selectUsers } from 'selectors/user';
import Actions from './Actions';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Users extends Component {
  static propTypes = {
    // eslint-disable-next-line
    classes: PropTypes.object.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    listUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
  };

  state = {
    actions: false,
  };

  componentDidMount() {
    this.props.listUsers();
  }

  openActions = actions => this.setState({ actions });

  closeActions = () => this.setState({ actions: false });

  render() {
    const { actions } = this.state;
    const { classes, users } = this.props;
    return (
      <Paper className={classes.root}>
        <Actions
          userId={actions}
          onClose={this.closeActions}
          deleteUser={this.props.deleteUser}
        />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Lodge</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.lodge}</TableCell>
                <TableCell>
                  <IconButton onClick={() => this.openActions(row.id)}>
                    <MoreIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  users: selectUsers(state),
});

export default compose(
  connect(
    mapStateToProps,
    { listUsers, deleteUser }
  ),
  withStyles(styles)
)(Users);
