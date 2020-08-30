import React from 'react';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const FavoriteMade = ({ favorite, haveMade, classStyle }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {favorite ? (
        <StarRoundedIcon
          className={{ ...classStyle }}
          style={{ display: 'inline-block', marginRight: 4 }}
        />
      ) : (
        <StarBorderRoundedIcon
          className={{ ...classStyle }}
          style={{ display: 'inline-block', marginRight: 4 }}
        />
      )}
      {haveMade ? 'Have Made' : 'Have Not Made Yet!'}
    </div>
  );
};

export default FavoriteMade;
