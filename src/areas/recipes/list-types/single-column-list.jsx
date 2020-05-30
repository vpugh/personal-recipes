import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { replaceFractions } from '../../../util/helper-functions';

export const useStyles = makeStyles((theme) => ({
  listContainer: {
    margin: 0,
    padding: 0,
  },
  listItem: {
    marginLeft: '1rem',
    paddingBottom: '.75rem',
  },
}));

const SingleColumnList = ({ list, showFractions }) => {
  const classes = useStyles();
  return (
    <ul className={classes.listContainer}>
      {list.map((item) => (
        <li key={item} className={classes.listItem}>
          {replaceFractions(item, showFractions)}
        </li>
      ))}
    </ul>
  );
};

export default SingleColumnList;
