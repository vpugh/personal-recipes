import React from 'react';
import { useAuth } from '../../context/auth-context';
import PageContainer from '../../components/page-container';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Tags from '../../components/tags';
import { displayTotalTime } from '../../util/helper-functions';

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
    '&:not(:last-child)': {
      paddingBottom: 30,
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
        user.recipe.map((recipe, index) => {
          const {
            title,
            id,
            course,
            cuisine,
            main_dish,
            total_time,
            cook_time,
            prep_time,
            // serves,
            // serve_type,
          } = recipe;
          return (
            <div key={title} className={classes.recipeSpacer}>
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
                <span
                  className={`${classes.displayFlexCenter} ${classes.subFontSize}`}
                >
                  <img
                    src='/icons/Clock@2x.png'
                    alt='Settings Icon'
                    className={classes.icons}
                  />
                  {!total_time && `${displayTotalTime(cook_time, prep_time)}`}
                  {total_time &&
                    `${total_time} ${total_time < 60 ? 'mins' : ''}`}
                </span>
                <span
                  style={{ marginLeft: 12 }}
                  className={`${classes.displayFlexCenter} ${classes.subFontSize}`}
                >
                  {/* {serves && `${wording} ${serves} ${serveType}`} */}
                </span>
              </div>
            </div>
          );
        })}
    </PageContainer>
  );
};

export default AllRecipes;
