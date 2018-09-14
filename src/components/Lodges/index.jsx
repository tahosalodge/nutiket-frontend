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
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { listLodges, deleteLodge } from 'state/modules/lodge';
import { getLodges } from 'selectors/lodge';
import { arrayOfLodges } from 'shapes/lodge';
import CreateLodge from './Create';

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
  chip: {
    margin: theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class Lodges extends Component {
  static propTypes = {
    // eslint-disable-next-line
    classes: PropTypes.object.isRequired,
    listLodges: PropTypes.func.isRequired,
    deleteLodge: PropTypes.func.isRequired,
    lodges: arrayOfLodges.isRequired,
  };

  state = {
    actions: false,
    showCreateModal: false,
  };

  componentDidMount() {
    this.props.listLodges();
  }

  openActions = actions => this.setState({ actions });

  closeActions = () => this.setState({ actions: false });

  toggleCreate = () =>
    this.setState(prev => ({ showCreateModal: !prev.showCreateModal }));

  render() {
    const { actions, showCreateModal } = this.state;
    const { classes, lodges } = this.props;
    return (
      <Paper className={classes.root}>
        <Actions
          lodgeId={actions}
          onClose={this.closeActions}
          deleteLodge={this.props.deleteLodge}
        />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Council</TableCell>
              <TableCell>Chapters</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {lodges.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.council}</TableCell>
                <TableCell>
                  {row.chapters.map(chapter => (
                    <Chip
                      key={chapter._id}
                      className={classes.chip}
                      label={chapter.name}
                    />
                  ))}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => this.openActions(row._id)}>
                    <MoreIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CreateLodge open={showCreateModal} handleClose={this.toggleCreate} />
        <Button
          variant="fab"
          className={classes.fab}
          color="secondary"
          onClick={this.toggleCreate}
        >
          <AddIcon />
        </Button>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  lodges: getLodges(state),
});

export default compose(
  connect(
    mapStateToProps,
    { listLodges, deleteLodge }
  ),
  withStyles(styles)
)(Lodges);
