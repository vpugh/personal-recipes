import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { replaceFractions } from '../../../util/helper-functions';

export const useStyles = makeStyles((theme) => ({
  listContainer: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    // marginLeft: '1rem',
    padding: '.75rem',
    borderTop: '1px solid #ddd',
    lineHeight: 1.4,
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
