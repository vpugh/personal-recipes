import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = (text, img, classes, direction, to = '/') => {
  return (
    <Link
      to={to}
      style={{
        background: '#FF8585',
        boxShadow: '2px 4px 24px rgba(255, 132, 132, 0.58)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
        textDecoration: 'none'
      }}
    >
      {direction === 'right' ? (
        <>
          <div className={classes.cardText}>{text}</div>
          <img className={classes.cardImg} src={img} alt='' />
        </>
      ) : (
        <>
          <img className={classes.cardImg} src={img} alt='' />
          <div className={classes.cardText}>{text}</div>
        </>
      )}
    </Link>
  );
};

export default ImageCard;
