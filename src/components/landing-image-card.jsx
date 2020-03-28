import React from 'react';

const ImageCard = (text, img, classes, direction) => {
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
    </div>
  );
};

export default ImageCard;
