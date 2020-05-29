import React from 'react';
import {
  FormControl,
  InputAdornment,
  Input,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const NestedTextInput = (props) => {
  const {
    className,
    name,
    value,
    nestedOnChange,
    removeNestedInput,
    placeholder,
  } = props;
  return (
    <FormControl className={className || null}>
      <Input
        type='text'
        name={name}
        value={value}
        onChange={nestedOnChange}
        required
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={removeNestedInput}
              edge='end'
            >
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        }
        placeholder={placeholder}
        autoComplete='off'
      />
    </FormControl>
  );
};
