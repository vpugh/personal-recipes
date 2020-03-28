import React, { useEffect, useState } from 'react';
import Tag from './tags';

const replaceFractions = text => {
  let newText = text;
  if (newText.includes('1/2')) {
    const half = newText.replace(/1\/2/g, `\u00BD`);
    newText = half;
  }
  if (newText.includes('1/4')) {
    const quarter = newText.replace(/1\/4/g, '\u00BC');
    newText = quarter;
  }
  if (newText.includes('1/3')) {
    const third = newText.replace(/1\/3/g, `\u2153`);
    newText = third;
  }
  if (newText.includes('3/4')) {
    const threeFourths = newText.replace(/3\/4/g, `\u00BE`);
    newText = threeFourths;
  }
  if (newText.includes('1/8')) {
    const oneEigth = newText.replace(/1\/8/g, `\u215B`);
    newText = oneEigth;
  }
  return newText;
};

const listGenerator = (arr, header, columns = 1) => {
  const lengthCheck = arr.length > 0;
  if (arr.length > 5 && columns === 2) {
    let newList = [];
    for (var i = 0, len = arr.length; i < len; i += 5) {
      newList.push(arr.slice(i));
    }
    newList[0].splice(5, arr.length);
    return (
      lengthCheck && (
        <div>
          <h3>{header}:</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            {newList.map(listArr => (
              <ul key={listArr} style={{ margin: 0, padding: 0 }}>
                {listArr.map(a => (
                  <li
                    style={{ marginLeft: '1rem', paddingBottom: '.75rem' }}
                    key={a}
                  >
                    {replaceFractions(a)}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )
    );
  }
  return (
    lengthCheck && (
      <div>
        <h3>{header}:</h3>
        <ul style={{ margin: 0, padding: 0 }}>
          {arr.map(a => (
            <li style={{ marginLeft: '1rem', paddingBottom: '.75rem' }} key={a}>
              {replaceFractions(a)}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

const makeLink = link => {
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

const ViewRecipe = props => {
  const [currentRecipe, setCurrentRecipe] = useState();
  const recipeId = props.match.params.id;
  useEffect(() => {
    const getRecipe = async () => {
      let res = await fetch(`/api/v1/recipe/${recipeId}`);
      return await res.json();
    };

    const fetchRecipe = async set => {
      const data = await getRecipe();
      set(data.recipe);
    };
    fetchRecipe(setCurrentRecipe);
  }, [recipeId]);

  if (currentRecipe) {
    const {
      title,
      description,
      course,
      cuisine,
      recipeOrigin,
      equipmentNeeded,
      ingredients,
      instructions,
      cookTime,
      prepTime
    } = currentRecipe;
    return (
      <div
        style={{
          background: '#FEFEFE',
          boxShadow: '4px 8px 44px #FFCCCC',
          padding: '40px 50px',
          color: '#575757',
          marginBottom: 72
        }}
      >
        <div style={{ maxWidth: 722 }}>
          <h1 style={{ margin: 0 }}>{title}</h1>
          <div style={{ fontSize: 18 }}>
            <p>{description}</p>
            <Tag text={course} fontSize={16} />
            <Tag text={cuisine} fontSize={16} />
            <div>
              <p>Cook Time:</p>
              <p>{cookTime}</p>
            </div>
            <div>
              <p>Prep Time:</p>
              <p>{prepTime}</p>
            </div>
            <p>Recipe found at: {makeLink(recipeOrigin)}</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {listGenerator(equipmentNeeded, 'Equipment Needed')}
              {listGenerator(ingredients, 'Ingredients', 2)}
              {listGenerator(instructions, 'Instructions')}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default ViewRecipe;
