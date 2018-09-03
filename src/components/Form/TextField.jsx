import React from 'react';
import { FastField } from 'formik';
import MuiTextField from '@material-ui/core/TextField';

const TextField = props => (
  <FastField
    {...props}
    render={({ field, form: { touched, errors }, disabled = false }) => (
      <MuiTextField
        {...props}
        {...field}
        error={touched[field.name] && !!errors[field.name]}
        helperText={errors[field.name] ? errors[field.name] : props.helperText}
        disabled={disabled}
        value={field.value || ''}
      />
    )}
  />
);

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
