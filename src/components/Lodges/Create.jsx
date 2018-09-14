import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik, Form, FieldArray } from 'formik';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from 'components/Form/TextField';
import { createLodge } from 'state/modules/lodge';

const CreateLodge = ({ fullScreen, open, handleClose, ...props }) => (
  <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="createLodge"
  >
    <Formik onSubmit={values => props.createLodge(values)}>
      {({ handleSubmit, values }) => (
        <Form>
          <DialogTitle id="createLodge">Create a lodge</DialogTitle>
          <DialogContent>
            <DialogContentText>Helper text goes here.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              name="council"
              label="Council Number"
              type="number"
              fullWidth
            />
            <FieldArray
              name="chapters"
              render={arrayHelpers => (
                <div>
                  {values.chapters &&
                    values.chapters.map((chapter, index) => (
                      // eslint-disable-next-line
                      <div key={index}>
                        <TextField
                          margin="dense"
                          name={`chapters.${index}.name`}
                          label="Chapter"
                        />
                        <TextField
                          margin="dense"
                          name={`chapters.${index}.district`}
                          label="District"
                        />
                        <IconButton
                          type="button"
                          color="primary"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </div>
                    ))}
                  <Button
                    type="button"
                    color="primary"
                    variant="raised"
                    onClick={() =>
                      arrayHelpers.push({ chapter: '', district: '' })
                    }
                  >
                    Add a chapter
                  </Button>
                </div>
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary" autoFocus>
              Create Lodge
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  </Dialog>
);

CreateLodge.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  createLodge: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default compose(
  connect(
    null,
    { createLodge }
  ),
  withMobileDialog()
)(CreateLodge);
