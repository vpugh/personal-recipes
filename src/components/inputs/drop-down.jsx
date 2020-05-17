import React, { useState } from 'react';
import { Tooltip, IconButton, makeStyles } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
  coloredTitles: {
    color: theme.palette.primary.tertiary,
  },
}));

const DropDown = ({
  labelTitle,
  placeholder,
  required = false,
  value = '',
  setFunction,
  optionArr,
  multiple = false,
}) => {
  const id = labelTitle.toLowerCase();
  const [handleMultiple, setHandleMultiple] = useState(multiple || false);
  const classes = useStyles();

  const handleOnChange = (e, set) => {
    const { value, options } = e.target;
    if (handleMultiple) {
      const allValues = [];
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          allValues.push(options[i].value);
        }
      }
      set(allValues);
    } else {
      set(value);
    }
  };

  const handleCheckbox = (e) => {
    const { checked } = e.target;
    setHandleMultiple(checked);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
      <label htmlFor={id} className={classes.coloredTitles}>
        {labelTitle}
        {required && '*'}
        {handleMultiple && Array.isArray(value) && ` - ${value.join(', ')}`}
      </label>
      <select
        value={value}
        name={id}
        id={id}
        onChange={(e) => handleOnChange(e, setFunction)}
        style={{
          marginTop: 10,
          background: '#F7F7F7',
          border: '1px solid #E8E8E8',
          padding: '9px 14px',
          fontSize: 16,
          height: 38,
          color: value ? '#000' : '#757575',
        }}
        multiple={handleMultiple}
      >
        <option defaultValue value=''>
          {placeholder}
        </option>
        {optionArr &&
          optionArr.map((dl) => (
            <option key={dl} value={dl}>
              {dl}
            </option>
          ))}
      </select>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <input
          type='checkbox'
          id='multiple'
          name='multiple'
          checked={handleMultiple}
          onChange={handleCheckbox}
          style={{ marginRight: 10 }}
        />
        <p style={{ marginRight: 10 }}>Choose multiple options</p>
        <Tooltip title='To select multiple options. Windows: Hold (ctrl) and click. Mac: Hold (cmd) and click.'>
          <IconButton aria-label='Instructions'>
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default DropDown;
