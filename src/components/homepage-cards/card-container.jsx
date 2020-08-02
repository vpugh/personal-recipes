import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CardCategory from './card-category';
import CardRecipe from './card-recipe';
import { prepareUrl } from '../../util/helper-functions';
import CardBase from '../card/card-base';

const useStyles = makeStyles((theme) => ({
  subTitle: {
    fontSize: 16,
    lineHeight: '22px',
    color: theme.palette.primary.tertiary,
    marginTop: 0,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    },
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '100%',
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
            <CardBase
              key={type ? item.id : item}
              to={
                type
                  ? `/recipe/${item.id}`
                  : `/recipes/${link.toLowerCase()}/${prepareUrl(item)}`
              }
              query={item.id}
            >
              {type ? (
                <CardRecipe recipe={item} />
              ) : (
                <CardCategory category={item} title={title} />
              )}
            </CardBase>
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
