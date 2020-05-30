import React from 'react';
import useStyles from '../../styles/horizontal-card-styles';
import { displayTotalTime } from '../../util/helper-functions';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { makeStyles } from '@material-ui/core/styles';

const starStyles = makeStyles((theme) => ({
  star: {
    fontSize: 36,
    color: theme.palette.primary.main,
    paddingRight: 10,
    paddingLeft: 30,
    transition: '300ms ease-in-out',
    '&:hover': {
      opacity: '.4',
    },
  },
}));

const CardRecipe = (props) => {
  const { recipe } = props;
  const classes = useStyles(props);
  const starClass = starStyles();
  if (!recipe) {
    return <h2>Card Category</h2>;
  }
  const {
    title,
    total_time,
    cook_time,
    prep_time,
    serves,
    serve_type,
    favorite,
  } = recipe;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h3
          className='card-title'
          style={{ marginTop: 0, marginBottom: '.5rem' }}
        >
          {title}
        </h3>
        {(total_time || cook_time || prep_time) && (
          <div className={classes.displayFlexCenter} style={{ marginTop: 24 }}>
            <img
              src='/icons/Clock@2x.png'
              alt='Settings Icon'
              className={classes.icons}
            />
            <p style={{ margin: 0 }}>
              {!total_time && `${displayTotalTime(cook_time, prep_time)}`}
              {total_time && `${total_time} ${total_time < 60 ? 'mins' : ''}`}
            </p>
            <p style={{ margin: '0 0 0 24px' }}>
              {serves} {serve_type || 'portions'}
            </p>
          </div>
        )}
      </div>
      {favorite ? (
        <StarRoundedIcon className={starClass.star} />
      ) : (
        <StarBorderRoundedIcon className={starClass.star} />
      )}
    </div>
  );
};

export default CardRecipe;