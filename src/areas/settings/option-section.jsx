import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { capitalize } from '../../util/helper-functions';
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
}));

const OptionSection = (props) => {
  const classes = useStyles();
  const [removedItems, setRemovedItems] = useState();

  const { name, value, arr } = props;
  return (
    <div>
      <h3 className={classes.settingHeader}>{capitalize(name)}</h3>
      {/* {value.length > 0 ? (
        <ul className={classes.list}>
          {value.map((v) => (
            <li key={v} className={classes.listBullet}>
              {v}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Selections</p>
      )} */}
      <FormSelect arr={arr || []} value={value} name={`${name} arr`} />
    </div>
  );
};

export default OptionSection;
