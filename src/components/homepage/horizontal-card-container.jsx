import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HorizontalCardType from './horizontal-card-type';
import HorizontalCard from './horizontal-card';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  subTitle: {
    fontSize: '16px',
    lineHeight: '22px',
    color: '#F65B5B',
    fontWeight: 'normal',
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
  grid: {
    display: 'grid',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridAutoRows: 'auto',
      gridGap: 20,
    },
  },
}));

const HorizontalCardContainer = (props) => {
  const classes = useStyles();
  const {
    containerName,
    containerLink,
    containerView,
    arr,
    cardType = 'category',
  } = props;

  return (
    <div style={{ marginBottom: 50 }}>
      <div className={classes.contentContainer}>
        <h4 className={classes.subTitle} style={{ fontSize: 22 }}>
          {containerName}
        </h4>
        <div>
          <Link
            className={classes.subTitle}
            style={{ color: '#000', textDecoration: 'underline' }}
            to={`${containerLink}`}
            query={containerLink}
          >
            View All {containerView}
          </Link>
        </div>
      </div>
      {cardType === 'category' ? (
        <div className={classes.grid}>
          {arr.map((type) => (
            <HorizontalCardType type={type} link={containerLink} key={type} />
          ))}
        </div>
      ) : (
        <div className={classes.cardContainer}>
          {arr.map((recipe) => (
            <HorizontalCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HorizontalCardContainer;
