import React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export const FormTextInput = (props) => {
  const {
    className,
    label,
    name,
    value,
    onChange,
    placeholder,
    required,
    multiline = false,
    endAdornment,
  } = props;
  return (
    <FormControl className={className || null}>
      {label && (
        <InputLabel>
          {label}
          {required && '*'}
        </InputLabel>
      )}
      <Input
        type='text'
        name={name}
        value={value}
        multiline={multiline || null}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete='off'
        required={required || null}
        endAdornment={endAdornment}
      />
    </FormControl>
  );
};
