import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CategoryCard from './category-card';
import RecipeCard from './recipe-card';

const useStyles = makeStyles((theme) => ({
  subTitle: {
    fontSize: 16,
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
  marginBottom: {
    [theme.breakpoints.up('md')]: {
      marginBottom: 50,
    },
    marginBottom: 20,
  },
}));

const HorizontalCardContainer = (props) => {
  const classes = useStyles(props);
  const {
    cardTitle,
    viewAllLink,
    viewAllText,
    arr,
    cardType = 'category',
  } = props;

  if (arr && arr.length === 0) {
    return null;
  }

  return (
    <div className={classes.marginBottom}>
      <div className={classes.contentContainer}>
        <h4 className={classes.subTitle} style={{ fontSize: 22 }}>
          {cardTitle}
        </h4>
        <div>
          <Link
            className={classes.subTitle}
            style={{ color: '#000', textDecoration: 'underline' }}
            to={`${viewAllLink}`}
            query={viewAllLink}
          >
            View All {viewAllText}
          </Link>
        </div>
      </div>
      {cardType === 'category' ? (
        <CategoryCard
          cardType={cardType}
          cardTitle={cardTitle}
          viewAllLink={viewAllLink}
          viewAllText={viewAllText}
          arr={arr}
        />
      ) : (
        <RecipeCard
          cardType={cardType}
          cardTitle={cardTitle}
          viewAllLink={viewAllLink}
          viewAllText={viewAllText}
          arr={arr}
        />
      )}
    </div>
  );
};

export default HorizontalCardContainer;
