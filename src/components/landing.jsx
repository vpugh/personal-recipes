import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import AddRecipeWidget from './add-recipe-widget';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 18
  },
  subTitle: {
    fontSize: '16px',
    lineHeight: '22px',
    color: '#F65B5B',
    fontWeight: 'normal',
    marginTop: 0
  },
  addedShadowBox: {
    background: '#FEFEFE',
    boxShadow: '4px 8px 44px #FFCCCC'
  },
  h3Title: {
    fontWeight: 'normal',
    margin: 0,
    fontSize: 18,
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  displayFlexCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  subFontSize: {
    fontSize: 10
  },
  addNewButton: {
    background: '#FF8585',
    boxShadow: ' 4px 8px 44px #FFCCCC',
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    paddingTop: 16,
    paddingBottom: 16,
    border: 'none'
  },
  cardText: props => ({
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: props.direction ? 151 : 30,
    marginRight: props.direction ? 30 : 151
  }),
  cardImg: {
    width: 262,
    height: 69
  }
});

const getRecipes = async () => {
  let res = await fetch('/api/v1/recipes');
  return await res.json();
};

const fetchRecipes = async set => {
  const data = await getRecipes();
  set(data.recipes);
};

const Landing = () => {
  const classes = useStyles();

  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetchRecipes(setRecipes);
  }, []);

  const imageCard = (text, img, direction) => {
    return (
      <div
        onClick={() => alert(`Send me to the ${text} page`)}
        style={{
          background: '#FF8585',
          boxShadow: '2px 4px 24px rgba(255, 132, 132, 0.58)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 40
        }}
      >
        {direction === 'right' && (
          <>
            <div className={classes.cardText}>{text}</div>
            <img className={classes.cardImg} src={img} alt='' />
          </>
        )}
        {direction === 'left' && (
          <>
            <img className={classes.cardImg} src={img} alt='' />
            <div className={classes.cardText}>{text}</div>
          </>
        )}
      </div>
    );
  };

  const limitRecipes = () => {
    return recipes.slice(0, 4);
  };

  if (recipes) {
    return (
      <div className={classes.container}>
        <div>
          <h4 className={classes.subTitle}>Recently Added</h4>
          <div className={classes.addedShadowBox}>
            <div style={{ padding: '30px 20px' }}>
              {recipes &&
                limitRecipes().map((ra, index) => (
                  <AddRecipeWidget
                    key={`${ra.title} ${index}`}
                    ra={ra}
                    index={index}
                  />
                ))}
            </div>
            <Link to='/add-recipe' className={classes.addNewButton}>
              Add New Recipe
            </Link>
          </div>
        </div>
        <div>
          <div style={{ marginTop: 61 }}>
            {imageCard('Course', './images/course-image@2x.png', 'right')}
            {imageCard('Cuisine', './images/cuisine-image@2x.png', 'left')}
            {imageCard('Protein', './images/protein-image@2x.png', 'right')}
            {imageCard(
              'All Recipes',
              './images/all-recipes-image@2x.png',
              'left'
            )}
          </div>
        </div>
      </div>
    );
  }

  return <p>Loading Recipes</p>;
};

export default Landing;
