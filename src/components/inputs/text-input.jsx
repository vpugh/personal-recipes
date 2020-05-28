import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  label: (props) => ({
    color: props.color && theme.palette.primary.tertiary,
  }),
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  input: {
    marginTop: 10,
    background: '#F7F7F7',
    border: '1px solid #E8E8E8',
    padding: '9px 14px',
    fontSize: 16,
  },
}));

const onChange = (e, set) => {
  const { value } = e.target;
  set(value);
};

const TextInput = (props) => {
  const {
    label,
    placeholder,
    required = false,
    value = '',
    setFunc,
    type = 'text',
    noAutocomplete = false,
  } = props;
  const classes = useStyles(props);
  const name = label ? label.toLowerCase() : null;
  return (
    <div className={classes.container}>
      <label htmlFor={name} className={classes.label}>
        {label}
        {required && '*'}
      </label>
      <input
        id={name}
        name={name}
        className={classes.input}
        onChange={(e) => onChange(e, setFunc)}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete={noAutocomplete ? 'new-password' : null}
      />
    </div>
  );
};

export default TextInput;
