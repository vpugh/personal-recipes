import React from 'react';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { useTheme } from '@material-ui/core';

const displayMadeText = (haveMade) => {
  return haveMade ? 'Have Made' : 'Have Not Made Yet!';
};

const variableColor = (favorite, theme) => {
  return {
    color: favorite ? theme.palette.primary.main : theme.palette.primary.pale,
    opacity: favorite ? null : 0.5,
  };
};

const FavoriteMade = ({
  favorite,
  haveMade,
  favHasColor = false,
  classStyle,
  icon = false,
  text = false,
}) => {
  const theme = useTheme();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StarRoundedIcon
        className={classStyle}
        style={
          favHasColor
            ? variableColor(favorite, theme)
            : { color: favorite ? 'inherit' : '#e2e2e2' }
        }
      />
      {haveMade && icon && <LocalDiningIcon />}
      {text && displayMadeText(haveMade)}
    </div>
  );
};

export default FavoriteMade;
