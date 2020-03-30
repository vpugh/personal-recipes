import React from 'react';
import Tag from './tags';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
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
  icons: {
    width: 15,
    height: 15,
    marginRight: 6,
    marginLeft: 6
  }
});

const toHour = time => {
  return `${time} ${time > 1 ? 'hrs' : 'hr'}`;
};

const displayTotalTime = (cook, prep) => {
  const total = cook + prep;
  if (total > 60) {
    return toHour(Math.floor(total / 60));
  }
  return `${Math.floor(total)} mins`;
};

const AddRecipeWidget = ({ ra, index, limit }) => {
  const classes = useStyles();

  const isLastItem = limit - 2 === index;

  const {
    title,
    id,
    course,
    cuisine,
    mainDish,
    totalTime,
    cookTime,
    prepTime,
    serves,
    serveType
  } = ra;
  return (
    <div
      key={title}
      style={{
        paddingBottom: isLastItem ? null : 30
      }}
    >
      <h3 className={classes.h3Title}>
        <Link to={`/recipe/${id}`} query={id}>
          {title}
        </Link>
      </h3>
      <div
        className={`${classes.displayFlexCenter}`}
        style={{
          color: '#6C6C6C',
          marginTop: 10
        }}
      >
        {course && <Tag text={course} />}
        {cuisine && <Tag text={cuisine} />}
        {mainDish && <Tag text={mainDish} />}
        <span className={`${classes.displayFlexCenter} ${classes.subFontSize}`}>
          <img
            src='./icons/Clock@2x.png'
            alt='Settings Icon'
            className={classes.icons}
          />
          {!totalTime && `${displayTotalTime(cookTime, prepTime)}`}
          {totalTime && `${totalTime} ${totalTime < 60 ? 'mins' : ''}`}
        </span>
        <span className={`${classes.displayFlexCenter} ${classes.subFontSize}`}>
          <img
            src='./icons/Utensils@2x.png'
            alt='Settings Icon'
            className={classes.icons}
          />
          Serves {serves} {serveType}
        </span>
      </div>
    </div>
  );
};

export default AddRecipeWidget;
