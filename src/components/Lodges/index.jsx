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
import Chip from '@material-ui/core/Chip';
import { listLodges } from 'state/modules/lodge';
import { selectLodges } from 'selectors/lodge';

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
});

const rows = [
  {
    id: 1,
    name: 'Tahosa',
    council: '061',
    chapters: ['Spirit Eagle', 'White Buffalo', 'Kodiak'],
  },
  {
    id: 2,
    name: 'Ha-Kin-Skay-A-Ki',
    council: '062',
    chapters: [],
  },
];
class Lodges extends Component {
  static propTypes = {
    // eslint-disable-next-line
    classes: PropTypes.object.isRequired,
  };

  state = {
    actions: false,
  };

  componentDidMount() {
    this.props.listLodges();
  }

  openActions = actions => this.setState({ actions });

  closeActions = () => this.setState({ actions: false });

  render() {
    const { actions } = this.state;
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Actions userId={actions} onClose={this.closeActions} />
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
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.council}</TableCell>
                <TableCell>
                  {row.chapters.map(chapter => (
                    <Chip className={classes.chip} label={chapter} />
                  ))}
                </TableCell>
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
  lodges: selectLodges(state),
});

export default compose(
  connect(
    mapStateToProps,
    { listLodges }
  ),
  withStyles(styles)
)(Lodges);
