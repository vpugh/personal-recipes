import React from 'react';
import { useAuth } from '../../context/auth-context';
import PageContainer from '../../components/page-container';
import { Link } from 'react-router-dom';
import DisplayCategories from './display-categories';
import { makeStyles } from '@material-ui/core/styles';
import GenerateList from './generate-list';
import Tags from '../../components/tags';

export const useStyles = makeStyles((theme) => ({
  recipeContainer: {
    background: theme.palette.background.white,
    boxShadow: `4px 8px 44px ${theme.palette.primary.pale}`,
    padding: '40px 50px',
    color: '#575757',
    margin: '0 auto 72px auto',
    maxWidth: 660,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  recipeTitle: {
    margin: 0,
  },
  recipeOrigin: {
    borderTop: '1px solid #efefef',
    borderBottom: '1px solid #efefef',
    padding: '13px 0',
    marginTop: 20,
    fontSize: '0.8rem',
  },
  recipeDescription: {
    paddingTop: '1rem',
    paddingBottom: '.5rem',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerDisplay: {
    [theme.breakpoints.up('md')]: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingRight: 20,
      marginRight: 20,
      borderRight: '1px solid #ddd',
    },
    [theme.breakpoints.down('sm')]: {
      border: '1px solid #ddd',
      padding: 10,
      marginBottom: 10,
    },
  },
  headerHeader: {
    [theme.breakpoints.up('md')]: {
      fontWeight: 'bold',
      fontSize: '.75rem',
      margin: 0,
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      margin: 0,
    },
  },
  headerText: {
    [theme.breakpoints.up('md')]: {
      margin: '.5rem 0',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      margin: '0 0 0 5px',
    },
  },
  tag: {
    background: '#F4F4F4',
    padding: '4px 12px',
    borderRadius: 6,
    display: 'inline-flex',
    flexDirection: 'row',
    marginRight: 10,
    fontSize: '1rem',
    marginTop: '1rem',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  descriptionBox: {
    background: '#efefef',
    padding: 20,
    borderRadius: 3,
  },
}));

const makeLink = (link) => {
  if (link.startsWith('http') || link.startsWith('www')) {
    return (
      <a
        href={link}
        style={{ color: 'inherit', fontWeight: 'bold' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        {link}
      </a>
    );
  }
  return link;
};

const ViewRecipe = (props) => {
  const { user } = useAuth();
  const recipeId = props.match.params.id;
  const classes = useStyles();

  if (user) {
    console.log('View Recipe', user, user.recipe);
    const recipes = user && user.recipe;
    const currentRecipe = recipes.filter((x) => (x = x.id === recipeId))[0];

    const {
      title,
      description,
      course,
      cuisine,
      main_dish,
      recipe_origin,
      equipment_needed,
      ingredients,
      instructions,
      cook_time,
      prep_time,
      total_time,
      notes,
      tags,
      serves,
    } = currentRecipe;

    return (
      <PageContainer>
        <div>
          <div className={classes.headerContainer}>
            <h1 style={{ marginTop: 0 }}>{title}</h1>
            <Link
              style={{ color: 'inherit' }}
              to={`/recipe/edit/${recipeId}`}
              query={recipeId}
            >
              Edit
            </Link>
          </div>
          <div>
            <p className={classes.descriptionBox}>{description}</p>
            <DisplayCategories header='Course' data={course} />
            <DisplayCategories header='Cuisine' data={cuisine} />
            <DisplayCategories header='Main Dish' data={main_dish} />
            <DisplayCategories header='Prep Time' data={prep_time} />
            <DisplayCategories header='Cook Time' data={cook_time} />
            <DisplayCategories header='Total Time' data={total_time} />
            <DisplayCategories header='Serves' data={serves} />
            {recipe_origin && (
              <p className={classes.recipeOrigin}>
                Recipe found at: {makeLink(recipe_origin)}
              </p>
            )}
            <div className={classes.listContainer}>
              <GenerateList arr={equipment_needed} header='Equipment Needed' />
              <GenerateList
                arr={ingredients}
                header='Ingredients'
                columns={2}
              />
              <GenerateList arr={instructions} header='Instructions' />
              <GenerateList arr={notes} header='Notes' />
              <div style={{ marginTop: 10 }}>
                <Tags content={tags} />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <h1>Loading...</h1>
    </PageContainer>
  );
};

export default ViewRecipe;
