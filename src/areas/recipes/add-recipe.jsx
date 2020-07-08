import React, { useState } from 'react';
import PageContainer from '../../components/page-container';
import { makeStyles } from '@material-ui/core/styles';
import { RecipeForm } from './recipe-form';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  scratchPaper: {
    position: 'fixed',
    right: 0,
    top: 0,
    left: 0,
    padding: 20,
    background: '#fff',
    border: '1px solid #ddd',
    zIndex: 2,
    marginBottom: 40,
  },
}));

const AddRecipe = (props) => {
  const classes = useStyles();
  const [showScratchPaper, setShowScratchPaper] = useState(false);
  // const header = () => {
  //   return (

  //   );
  // };

  return (
    <PageContainer>
      {showScratchPaper && (
        <div className={classes.scratchPaper}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <p style={{ margin: 0 }}>
              A place to put your recipe info so you don't have to keep
              switching between tabs.
            </p>
            <div
              role='button'
              onClick={() => setShowScratchPaper(!showScratchPaper)}
            >
              <CloseIcon />
            </div>
          </div>
          <div>
            <textarea style={{ width: '100%', fontSize: 18 }} rows='8' />
          </div>
        </div>
      )}
      <div className={classes.headerContainer}>
        <h1 className='pageTitle'>Add Recipe</h1>
        <div
          role='button'
          onClick={() => setShowScratchPaper(!showScratchPaper)}
          style={{ textDecoration: 'underline' }}
        >
          Show Scratch Paper
        </div>
      </div>
      <RecipeForm history={props.history} />
    </PageContainer>
  );
};

export default AddRecipe;
