import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { removeToast } from 'state/modules/toast';

const Toasts = ({ toasts, ...props }) => (
  <Fragment>
    {toasts.map(toast => {
      const { id } = toast;
      return (
        <SnackbarContent
          {...toast}
          key={id}
          dismiss={() => props.removeToast(id)}
        />
      );
    })}
  </Fragment>
);

Toasts.propTypes = {
  removeToast: PropTypes.func.isRequired,
  toasts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  toasts: state.toasts,
});

export default connect(
  mapStateToProps,
  { removeToast }
)(Toasts);
