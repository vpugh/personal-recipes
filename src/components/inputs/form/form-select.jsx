import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const FormSelect = (props) => {
  const {
    className,
    label,
    name,
    value,
    onChange,
    required = false,
    multiple = true,
    arr,
  } = props;
  return (
    <FormControl className={className}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple={multiple || null}
        name={name}
        value={value}
        onChange={onChange}
        input={<Input />}
        required={required || null}
      >
        {arr.map((arrItem) => (
          <MenuItem key={arrItem} value={arrItem}>
            {arrItem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
