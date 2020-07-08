import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { replaceFractions } from '../../../util/helper-functions';

export const useStyles = makeStyles((theme) => ({
  listItem: {
    marginLeft: '1rem',
    paddingBottom: '.75rem',
  },
  TwoColumnContainer: {
    margin: 0,
    padding: 0,
    [theme.breakpoints.up('md')]: {
      width: '48%',
    },
  },
  listFlex: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
}));

const separateList = (oldList) => {
  let newList = [];
  const limit = oldList.length / 2;
  for (var i = 0, len = oldList.length; i < len; i += limit) {
    newList.push(oldList.slice(i));
  }
  newList[0].splice(limit, oldList.length);
  return newList;
};

const MultipleColumnList = ({ list, showFractions }) => {
  const classes = useStyles();

  if (!list) {
    return null;
  }

  return (
    <div>
      <div className={classes.listFlex}>
        {separateList(list).map((lists, index) => (
          <ul className={classes.TwoColumnContainer} key={index}>
            {lists.map((item) => (
              <li className={classes.listItem} key={item}>
                {replaceFractions(item, showFractions)}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MultipleColumnList;
