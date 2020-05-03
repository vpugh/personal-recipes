import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Shimmer from '../shared/shimmer';
import HorizontalCard from './horizontal-card';

const useStyles = makeStyles((theme) => ({
  subTitle: {
    fontSize: '16px',
    lineHeight: '22px',
    color: theme.palette.primary.tertiary,
    marginTop: 0,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '100%',
  },
  cardContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  grid: (props) => ({
    display: 'grid',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns:
        props.cardType === 'category' ? '1fr 1fr 1fr' : '1fr 1fr',
      gridAutoRows: 'auto',
      gridGap: 20,
    },
  }),
}));

const RecipeCard = (props) => {
  const classes = useStyles(props);
  const { arr } = props;
  return (
    <div className={classes.grid}>
      {arr
        ? arr.map((recipe) => (
            <HorizontalCard recipe={recipe} key={recipe.id} />
          ))
        : Array(...Array(4)).map((r, index) => (
            <Shimmer type='recipe' key={`${r} ${index}`} />
          ))}
    </div>
  );
};

export default RecipeCard;
