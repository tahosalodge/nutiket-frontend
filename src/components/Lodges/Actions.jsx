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
  userId,
  ...other
}) => (
  <Dialog
    onClose={onClose}
    aria-labelledby="simple-dialog-title"
    open={!!userId || false}
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
          <ListItemText primary="Delete Lodge" />
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

// class SimpleDialogDemo extends React.Component {
//   state = {
//     open: false,
//     selectedValue: emails[1],
//   };

//   handleClickOpen = () => {
//     this.setState({
//       open: true,
//     });
//   };

//   handleClose = value => {
//     this.setState({ selectedValue: value, open: false });
//   };

//   render() {
//     return (
//       <div>
//         <Typography variant="subheading">Selected: {this.state.selectedValue}</Typography>
//         <br />
//         <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
//         <SimpleDialogWrapped
//           selectedValue={this.state.selectedValue}
//           open={this.state.open}
//           onClose={this.handleClose}
//         />
//       </div>
//     );
//   }
// }

// export default SimpleDialogDemo;
