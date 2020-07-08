import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CardCategory from './card-category';
import CardRecipe from './card-recipe';
import Shimmer from './shimmer';
import { prepareUrl } from '../../util/helper-functions';

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
      gridTemplateColumns: !props.type ? '1fr 1fr 1fr' : '1fr 1fr',
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
  displayFlexCenter: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 0,
  },
  subFontSize: {
    fontSize: 10,
  },
  horizontalCard: {
    color: theme.palette.grey.one,
    fontSize: 18,
    borderRadius: 6,
    boxShadow: `2px 4px 8px ${theme.palette.primary.pale}`,
    background: theme.palette.background.white,
    padding: 20,
    transition: '300ms ease-in-out',
    '&:hover': {
      boxShadow: `4px 6px 10px ${theme.palette.primary.main}`,
    },
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 10,
    },
    fontWeight: 'normal',
    textDecoration: 'none',
  },
  icons: {
    width: 20,
    height: 20,
    marginRight: 6,
    marginLeft: 6,
  },
}));

const CardContainer = (props) => {
  const classes = useStyles(props);
  const { title, link, linkText, arr, type } = props;

  if (arr && arr.length === 0) {
    return null;
  }

  return (
    <div className={classes.marginBottom}>
      <div className={classes.contentContainer}>
        <h4 className={classes.subTitle} style={{ fontSize: 22 }}>
          {title}
        </h4>
        <Link
          className={classes.subTitle}
          style={{ color: '#000', textDecoration: 'underline' }}
          to={type ? `/recipes/${link}` : `/recipes/${link}`}
        >
          View All {linkText}
        </Link>
      </div>
      <div className={classes.grid}>
        {arr &&
          arr.map((item) => (
            <Link
              key={type ? item.id : item}
              to={
                type
                  ? `/recipe/${item.id}`
                  : `/recipes/${link.toLowerCase()}/${prepareUrl(item)}`
              }
              query={item.id}
              className={classes.horizontalCard}
            >
              {type ? (
                <CardRecipe recipe={item} />
              ) : (
                <CardCategory category={item} title={title} />
              )}
            </Link>
          ))}
        {!arr &&
          Array(...Array(type ? 4 : 3)).map((r, index) => (
            <div className={classes.horizontalCard} key={`${r}${index}`}>
              <Shimmer type={type} key={`${r} ${index}`} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
