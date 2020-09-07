import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { FormSelect } from '../../components/inputs/form/form-select';

const useStyles = makeStyles((theme) => ({
  settingHeader: {
    marginBottom: 0,
  },
  list: {
    margin: '.5rem 0 0 0',
    padding: 0,
  },
  listBullet: {
    marginLeft: '1.2rem',
  },
  formControl: {
    marginBottom: theme.spacing(1),
    minWidth: 120,
    width: '31%',
    '&:not(:last-child)': {
      marginRight: '3.5%',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'inherit',
    },
  },
}));

const returnName = (name) => {
  switch (name) {
    case 'mains':
      return 'Main Dish';

    case 'cuisines':
      return 'Cuisine';

    case 'courses':
      return 'Courses';

    default:
      break;
  }
};

const OptionSection = (props) => {
  const classes = useStyles();
  const { name, value, arr } = props;
  const [removedItems, setRemovedItems] = useState(value || []);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setRemovedItems(value);
  };

  return (
    <div>
      <FormSelect
        className={classes.formControl}
        arr={arr}
        label={name}
        onChange={(e) => handleOnChange(e, setRemovedItems)}
        value={removedItems}
        name={`${name} arr`}
      />
      <p style={{ display: 'inline-block', marginLeft: 16 }}>
        {removedItems.length > 0
          ? `${removedItems.length} options removed from ${returnName(
              name
            )} list`
          : `No options removed from ${name} list`}
      </p>
    </div>
  );
};

export default OptionSection;
