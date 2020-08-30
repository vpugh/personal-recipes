import React from 'react';
import useStyles from '../../styles/horizontal-card-styles';
import { displayTotalTime } from '../../util/helper-functions';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteMade from '../favorite-made';

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
    have_made,
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
        {(total_time || cook_time || prep_time || serves) && (
          <div className={classes.displayFlexCenter} style={{ marginTop: 24 }}>
            {(total_time || cook_time || prep_time) && (
              <>
                <img
                  src='/icons/Clock@2x.png'
                  alt='Settings Icon'
                  className={classes.icons}
                />
                <p style={{ margin: 0 }}>
                  {!total_time && `${displayTotalTime(cook_time, prep_time)}`}
                  {total_time &&
                    `${total_time} ${total_time < 60 ? 'mins' : ''}`}
                </p>
              </>
            )}
            <p
              style={{
                margin: `${
                  !total_time && !cook_time && !prep_time ? '0' : '0 0 0 24px'
                }`,
              }}
            >
              {serves} {serve_type || 'portions'}
            </p>
          </div>
        )}
      </div>
      <FavoriteMade
        classStyle={starClass.star}
        favorite={favorite}
        haveMade={have_made}
      />
    </div>
  );
};

export default CardRecipe;
