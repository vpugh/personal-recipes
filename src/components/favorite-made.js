import React from 'react';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

const displayMadeText = (haveMade) => {
  return haveMade ? 'Have Made' : 'Have Not Made Yet!';
};

const FavoriteMade = ({
  favorite,
  haveMade,
  classStyle,
  icon = false,
  text = false,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {favorite ? (
        <StarRoundedIcon
          className={classStyle}
          style={{ display: 'inline-block', marginRight: 4 }}
        />
      ) : (
        <StarBorderRoundedIcon
          className={classStyle}
          style={{ display: 'inline-block', marginRight: 4 }}
        />
      )}
      {haveMade && icon && <LocalDiningIcon />}
      {text && displayMadeText(haveMade)}
    </div>
  );
};

export default FavoriteMade;
