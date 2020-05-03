import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HorizontalCardType from './horizontal-card-type';
import Shimmer from '../shared/shimmer';

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

const CategoryCard = (props) => {
  const classes = useStyles(props);
  const { cardTitle, viewAllLink, arr } = props;
  return (
    <div className={classes.grid}>
      {arr &&
        arr.map((type) => (
          <HorizontalCardType
            type={type}
            link={viewAllLink}
            name={cardTitle}
            key={type}
          />
        ))}

      {!arr &&
        Array(...Array(4)).map((r, index) => (
          <Shimmer type='category' key={`${r} ${index}`} />
        ))}
    </div>
  );
};

export default CategoryCard;
