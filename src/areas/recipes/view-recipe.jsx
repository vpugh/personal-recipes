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
import FavoriteMade from '../../components/favorite-made';
import { jsPDF } from 'jspdf';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

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
    marginTop: 0,
    fontFamily: "'Sumana', serif",
    lineHeight: '1em',
    [theme.breakpoints.up('md')]: {
      // maxWidth: '70%',
      fontSize: 42,
      // marginBottom: '1.55em',
    },
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
    padding: 30,
    background: '#fbfbfb',
    boxShadow: '0px 1px 3px rgba(0, 0 ,0, 0.2)',
    borderRadius: 4,
    lineHeight: '1.4',
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
      flexDirection: 'row',
      alignItems: 'start',
      fontSize: 18,
      '& > a:not(:last-child)': {
        marginRight: 8,
      },
      '& > button:not(:last-child)': {
        marginRight: 8,
      },
    },
  },
  recipeActions: {
    display: 'flex',
    alignItems: 'baseline',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '& > :nth-child(1)': {
        marginBottom: 20,
      },
    },
    [theme.breakpoints.between('sm', 1023)]: {
      justifyContent: 'space-between',
      width: '100%',
      margin: '10px 0',
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      '& > :nth-child(1)': {
        paddingRight: 10,
      },
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

const createPDF = (data) => {
  // HTML Method - issue with width not working correctly though...
  // const doc = new jsPDF('p', 'pt', 'a4');

  // const htmlData = `
  //   <body>
  //     <h1 style="font-size: 14px; white-space: nowrap;">${data.title}</h1>
  //     <p style="font-size: 12px; white-space: nowrap;">${data.description}</p>
  //     <p style="font-size: 12px; white-space: nowrap;">${data.ingredients}</p>
  //     <p style="font-size: 12px; white-space: nowrap;">${data.instructions}</p>
  //   </body>
  // `;
  // doc.html(htmlData, {
  //   callback: function (doc) {
  //     doc.save(`${data.title} test.pdf`);
  //   },
  //   filename: `${data.title} test`,
  //   x: 20,
  //   y: 10,
  // });

  const doc = new jsPDF();

  let lineHeight = 10;
  const textFormat = (txt) => {
    if (Array.isArray(txt) && txt.length > 1) {
      lineHeight = lineHeight + txt.length * 3.5;
    } else if (txt.length > 60) {
      lineHeight = lineHeight + Math.floor(txt.length / 60) * 5;
    } else {
      lineHeight = lineHeight + 10;
    }
    return doc.text(20, lineHeight, txt, { maxWidth: 160 });
  };

  textFormat(data.title);
  console.log('Title Y', lineHeight);
  textFormat(data.description);
  console.log('Description Y', lineHeight);
  textFormat(data.ingredients);
  console.log('Ingredients Y', lineHeight);
  textFormat(data.instructions);
  console.log('Instructions Y', lineHeight);
  textFormat(data.notes || '');
  console.log('Notes Y', lineHeight);
  textFormat(data.recipeOrigin || '');
  console.log('RecipeOrigin Y', lineHeight);
  doc.save(`${data.title}.pdf`);
};

const exportToText = (data) => {
  // const a = document.createElement('a');
  // a.href = URL.createObjectURL(
  //   new Blob([JSON.stringify(data, null, 2)], {
  //     type: 'text/plain',
  //   })
  // );
  // a.setAttribute('download', `${data.title}.txt`);
  // document.body.appendChild(a);
  // a.click();
  // document.body.removeChild(a);
  createPDF(data);
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
      recipe_video,
      slug,
    } = currentRecipe;

    return (
      <PageContainer>
        <div>
          <div className={classes.headerContainer}>
            <div>
              <p
                style={{
                  fontSize: 15,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {Array.isArray(course) ? course.join(', ') : course}
              </p>
              <h1 className={classes.recipeTitle}>{title}</h1>
              <div style={{ margin: '20px 0' }}>
                <FavoriteMade favorite={favorite} haveMade={have_made} text />
              </div>
            </div>
            <div className={classes.recipeActions}>
              <div className={classes.recipeButtons}>
                <Button
                  component={Link}
                  to={`/recipe/edit/${recipeId}/${slug}`}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => alert('Deletion is not hooked up yet')}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => exportToText(currentRecipe)}
                  startIcon={<ArrowDownward />}
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                borderTop: '1px solid #ddd',
                padding: '20px 0 10px 0',
                marginTop: 20,
              }}
            >
              <DisplayCategories header='Cuisine' data={cuisine} />
              <DisplayCategories header='Main Dish' data={main_dish} />
              <DisplayCategories header='Prep Time' data={prep_time} />
              <DisplayCategories header='Cook Time' data={cook_time} />
              <DisplayCategories header='Total Time' data={total_time} />
              <DisplayCategories header='Serves' data={serves} />
            </div>
            {description && (
              <p className={classes.descriptionBox}>{description}</p>
            )}
            {(recipe_origin || recipe_video) && (
              <p className={classes.recipeOrigin}>
                {recipe_origin && (
                  <>Recipe found at: {makeLink(recipe_origin)}</>
                )}
                {recipe_video && (
                  <>
                    {recipe_origin && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    Video found at: {makeLink(recipe_video)}
                  </>
                )}
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
