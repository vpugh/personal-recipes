import React from 'react';
import { makeStyles } from '@material-ui/styles';

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
    fontSize: 18
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
  tags: {
    display: 'inline-flex',
    flexDirection: 'row',
    padding: '2px 9px',
    background: '#F4F4F4',
    borderRadius: 6,
    fontSize: 10,
    marginRight: 5
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

const recentlyAdded = [
  {
    title: 'World Famous Butter Chicken',
    course: 'Dinner',
    cuisine: 'Indian',
    protein: 'Chicken',
    prepTime: 45,
    cookTime: 60,
    serves: 4,
    serveType: 'people'
  },
  {
    title: 'Pineapple Upside-Down Pancakes',
    course: 'Breakfast',
    cuisine: 'American',
    protein: '',
    prepTime: 15,
    cookTime: 20,
    totalTime: '',
    serves: 22,
    serveType: 'pancakes'
  },
  {
    title: 'Fireball Shrimp',
    course: 'Dinner',
    cuisine: 'Malaysian',
    protein: 'Shrimp',
    prepTime: 15,
    cookTime: 20,
    totalTime: '',
    serves: 4,
    serveType: 'dishes'
  },
  {
    title: 'Potsticker Noodles Bowls',
    course: 'Dinner',
    cuisine: 'Asian',
    protein: 'Pork',
    prepTime: '',
    cookTime: '',
    totalTime: 30,
    serves: 4,
    serveType: 'people'
  }
];

const toHour = time => {
  return `${time} ${time > 1 ? 'hrs' : 'hr'}`;
};

const displayTotalTime = (cook, prep) => {
  const total = cook + prep;
  if (total > 60) {
    return toHour(total / 60);
  }
  return `${total} mins`;
};

const displayTime = mins => {
  if (mins > 60) {
    return toHour(mins / 60);
  }
  return `${mins} mins`;
};

const Landing = () => {
  const classes = useStyles();

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

  const tag = text => {
    return (
      <div
        className={classes.tags}
        onClick={() => alert(`Send me to ${text} tag page`)}
      >
        {text}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div>
        <h4 className={classes.subTitle}>Recently Added</h4>
        <div className={classes.addedShadowBox}>
          <div style={{ padding: '30px 20px' }}>
            {recentlyAdded.map((ra, index) => {
              return (
                <div
                  key={ra.title}
                  style={{
                    paddingBottom:
                      recentlyAdded.length - 1 === index ? null : 30
                  }}
                >
                  <h3 className={classes.h3Title}>{ra.title}</h3>
                  <div
                    className={`${classes.displayFlexCenter}`}
                    style={{
                      color: '#6C6C6C',
                      marginTop: 10
                    }}
                  >
                    {ra.course && tag(ra.course)}
                    {ra.cuisine && tag(ra.cuisine)}
                    {ra.protein && tag(ra.protein)}
                    <span
                      className={`${classes.displayFlexCenter} ${classes.subFontSize}`}
                    >
                      <img
                        src='./icons/Clock@2x.png'
                        alt='Settings Icon'
                        style={{
                          width: 15,
                          height: 15,
                          marginRight: 6,
                          marginLeft: 6
                        }}
                      />
                      {!ra.totalTime
                        ? `${displayTime(ra.prepTime)} + ${displayTime(
                            ra.cookTime
                          )}`
                        : ''}
                      {ra.totalTime
                        ? `${ra.totalTime} ${ra.totalTime < 60 ? 'mins' : ''}`
                        : ` | ${displayTotalTime(ra.cookTime, ra.prepTime)}`}
                    </span>
                    <span
                      className={`${classes.displayFlexCenter} ${classes.subFontSize}`}
                    >
                      <img
                        src='./icons/Utensils@2x.png'
                        alt='Settings Icon'
                        style={{
                          width: 15,
                          height: 15,
                          marginRight: 6,
                          marginLeft: 6
                        }}
                      />
                      Serves {ra.serves} {ra.serveType}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <button className={classes.addNewButton}>Add New Recipe</button>
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
};

export default Landing;
