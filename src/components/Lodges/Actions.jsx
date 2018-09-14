import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

const SimpleDialog = ({
  classes,
  onClose,
  selectedValue,
  lodgeId,
  deleteLodge,
  ...other
}) => (
  <Dialog
    onClose={onClose}
    aria-labelledby="simple-dialog-title"
    open={!!lodgeId || false}
    {...other}
  >
    <DialogTitle id="simple-dialog-title">Lodge Actions</DialogTitle>
    <div>
      <List>
        <ListItem button>
          <ListItemText primary="Add User" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Edit Lodge" />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Delete Lodge"
            onClick={() => deleteLodge(lodgeId)}
          />
        </ListItem>
      </List>
    </div>
  </Dialog>
);

SimpleDialog.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleDialog);
