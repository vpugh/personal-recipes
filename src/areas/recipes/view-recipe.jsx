import React from 'react';
import { useAuth } from '../../context/auth-context';
import PageContainer from '../../components/page-container';
import { Link, useParams } from 'react-router-dom';
import DisplayCategories from './display-categories';
import { makeStyles } from '@material-ui/core/styles';
import GenerateList from './generate-list';
import Tags from '../../components/tags';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

export const useStyles = makeStyles((theme) => ({
  recipeContainer: {
    background: theme.palette.background.white,
    boxShadow: `0 4px 12px 0 ${theme.palette.primary.pale}`,
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
    padding: 20,
    background: '#fbfbfb',
    boxShadow: '0px 1px 3px rgba(0, 0 ,0, 0.2)',
    borderRadius: 4,
  },
  timeContainer: {
    padding: 20,
    background: '#fbfbfb',
    boxShadow: '0px 1px 3px rgba(0, 0 ,0, 0.2)',
    borderRadius: 4,
  },
  recipeBodyFlex: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
    },
  },
  recipeButtons: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      marginBottom: 20,
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      alignItems: 'start',
    },
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

const ViewRecipe = () => {
  const { user } = useAuth();
  const classes = useStyles();
  const { id: recipeId } = useParams();

  if (user && user.recipes) {
    const recipes = user && user.recipes;
    const currentRecipe = recipes.filter(
      (x) => x.id.toString() === recipeId
    )[0];

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
      favorite,
      have_made,
    } = currentRecipe;

    return (
      <PageContainer>
        <div>
          <div className={classes.headerContainer}>
            <h1 style={{ marginTop: 0 }}>{title}</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {favorite ? (
                <StarRoundedIcon
                  style={{ display: 'inline-block', marginRight: 4 }}
                />
              ) : (
                <StarBorderRoundedIcon
                  style={{ display: 'inline-block', marginRight: 4 }}
                />
              )}
              {have_made ? 'Have Made' : 'Have Not Made Yet!'}
            </div>
            <div className={classes.recipeButtons}>
              <Button
                component={Link}
                to={`/recipe/edit/${recipeId}`}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
              <Button startIcon={<DeleteIcon />}>Delete</Button>
            </div>
          </div>
          <div>
            <DisplayCategories header='Course' data={course} />
            <DisplayCategories header='Cuisine' data={cuisine} />
            <DisplayCategories header='Main Dish' data={main_dish} />
            <div
              style={{
                borderTop: '1px solid #ddd',
                padding: '20px 0 10px 0',
                marginTop: 20,
              }}
            >
              <DisplayCategories header='Prep Time' data={prep_time} />
              <DisplayCategories header='Cook Time' data={cook_time} />
              <DisplayCategories header='Total Time' data={total_time} />
              <DisplayCategories header='Serves' data={serves} />
            </div>
            {description && (
              <p className={classes.descriptionBox}>{description}</p>
            )}
            {recipe_origin && (
              <p className={classes.recipeOrigin}>
                Recipe found at: {makeLink(recipe_origin)}
              </p>
            )}
            <div className={classes.listContainer}>
              <div className={classes.recipeBodyFlex}>
                <GenerateList
                  showFractions={user.settings[0].showFractions}
                  arr={ingredients}
                  header='Ingredients'
                  style={{
                    paddingRight: 40,
                    flex: '0 0 calc(33.3333% - 4rem)',
                  }}
                />
                <div style={{ flexDirection: 'column' }}>
                  <GenerateList
                    showFractions={user.settings[0].showFractions}
                    arr={equipment_needed}
                    header='Equipment Needed'
                  />
                  <GenerateList
                    showFractions={user.settings[0].showFractions}
                    arr={instructions}
                    header='Instructions'
                    style={{
                      flex: '0 0 calc(66.6667% - 6rem)',
                    }}
                  />
                </div>
              </div>
              <GenerateList
                showFractions={user.settings[0].showFractions}
                arr={notes}
                header='Notes'
              />
              <div style={{ marginTop: 20 }}>
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
