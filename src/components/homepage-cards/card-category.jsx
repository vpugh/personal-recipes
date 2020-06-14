import React from 'react';
import { useAuth } from '../../context/auth-context';

const findAmount = (category, title, recipes) => {
  let cat;
  if (title === 'Main Dishes') {
    cat = 'main_dish';
  } else if (title === 'Tags') {
    cat = 'tags';
  } else {
    cat = title.slice(0, -1).toLowerCase();
  }
  const totals = recipes.reduce((acc, recipe) => {
    if (cat && recipe[cat]) {
      if (Array.isArray(recipe[cat])) {
        acc.push(recipe[cat].flat());
      }
      if (!Array.isArray(recipe[cat])) {
        acc.push(recipe[cat]);
      }
      return acc;
    }
    return null;
  }, []);

  return `(${totals.filter((x) => x.includes(category) === true).length})`;
};

const CardCategory = ({ category, title }) => {
  const {
    user: { recipes },
  } = useAuth();

  if (!category) {
    return <h2>Card Type</h2>;
  }

  return (
    <h3 className='card-title' style={{ marginTop: 0, marginBottom: 0 }}>
      {category} {findAmount(category, title, recipes)}
    </h3>
  );
};

export default CardCategory;
