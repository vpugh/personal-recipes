import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../styles/horizontal-card-styles';

const HorizontalCardType = (props) => {
  const classes = useStyles();
  const { type, link } = props;

  return (
    <Link
      to={`${link.toLowerCase()}/${type.toLowerCase()}`}
      key={type}
      className={classes.horizontalCard}
      type='category'
    >
      <h3 className='card-title' style={{ marginTop: 0, marginBottom: 0 }}>
        {type}
      </h3>
    </Link>
  );
};

export default HorizontalCardType;
