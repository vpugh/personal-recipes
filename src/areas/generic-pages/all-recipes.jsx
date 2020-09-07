import React from 'react';
import { useAuth } from '../../context/auth-context';
import PageContainer from '../../components/page-container';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Tags from '../../components/tags';
import { displayTotalTime } from '../../util/helper-functions';
import FavoriteMade from '../../components/favorite-made';

const useStyles = makeStyles({
  h3Title: {
    fontWeight: 'normal',
    margin: '0 0 .5rem 0',
    fontSize: 22,
    color: '#5d5d5d',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  displayFlexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  subFontSize: {
    fontSize: 10,
  },
  icons: {
    width: 15,
    height: 15,
    marginRight: 6,
    marginLeft: 6,
  },
  recipeSpacer: {
    // border: '1px solid #eae9e9',
    padding: 20,
    borderRadius: 4,
    background: '#fbfbfb',
    boxShadow: '0px 1px 3px rgba(0, 0 ,0, 0.2)',
    '&:not(:last-child)': {
      marginBottom: 30,
    },
  },
});

const AllRecipes = () => {
  const { user } = useAuth();
  const classes = useStyles();

  return (
    <PageContainer>
      <h1 className='pageTitle'>All Recipes</h1>
      {user &&
        user.recipes.map((recipe) => {
          const {
            title,
            id,
            course,
            cuisine,
            main_dish,
            total_time,
            cook_time,
            prep_time,
            favorite,
            have_made,
            // serves,
            // serve_type,
          } = recipe;
          return (
            <div
              key={title}
              className={classes.recipeSpacer}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div>
                <h3 className={classes.h3Title}>
                  <Link to={`/recipe/${id}`} query={id}>
                    {title}
                  </Link>
                </h3>
                <div
                  className={`${classes.displayFlexCenter}`}
                  style={{
                    color: '#6C6C6C',
                    marginTop: 10,
                  }}
                >
                  <Tags content={course} />
                  <Tags content={cuisine} />
                  <Tags content={main_dish} />
                  {(total_time || cook_time || prep_time) && (
                    <span
                      className={`${classes.displayFlexCenter} ${classes.subFontSize}`}
                    >
                      <img
                        src='/icons/Clock@2x.png'
                        alt='Settings Icon'
                        className={classes.icons}
                      />
                      {!total_time &&
                        `${displayTotalTime(cook_time, prep_time)}`}
                      {total_time &&
                        `${total_time} ${total_time < 60 ? 'mins' : ''}`}
                    </span>
                  )}
                </div>
              </div>
              <FavoriteMade favorite={favorite} haveMade={have_made} icon />
            </div>
          );
        })}
    </PageContainer>
  );
};

export default AllRecipes;
