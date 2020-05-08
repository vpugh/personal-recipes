import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/new-auth-context';
import useStyles from '../../styles/horizontal-card-styles';

const HorizontalCardType = (props) => {
  const classes = useStyles();
  const { recipes } = useAuth();
  const { type, link, name } = props;

  const findAmount = (category) => {
    let cat;
    if (name === 'Main Dishes') {
      cat = 'mainDish';
    } else if (name === 'Tags') {
      cat = 'tags';
    } else {
      cat = name.slice(0, -1).toLowerCase();
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

  return (
    <Link
      to={`${link.toLowerCase()}/${type.toLowerCase()}`}
      key={type}
      className={classes.horizontalCard}
      type='category'
    >
      <h3 className='card-title' style={{ marginTop: 0, marginBottom: 0 }}>
        {type} {findAmount(type)}
      </h3>
    </Link>
  );
};

export default HorizontalCardType;
