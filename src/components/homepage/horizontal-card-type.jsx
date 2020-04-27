import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  horizontalCard: {
    color: 'rgb(87, 87, 87)',
    borderRadius: 6,
    fontSize: 18,
    boxShadow: 'rgb(255, 204, 204) 4px 8px 44px',
    background: 'rgb(254, 254, 254)',
    padding: 20,
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
    },
    '& > .card-title a': {
      color: 'inherit',
    },
  },
}));

const HorizontalCardType = (props) => {
  const classes = useStyles();
  const { type, link } = props;

  return (
    <div key={type} className={classes.horizontalCard}>
      <h3 className='card-title' style={{ marginTop: 0, marginBottom: 0 }}>
        <Link to={`${link.toLowerCase()}/${type.toLowerCase()}`}>{type}</Link>
      </h3>
    </div>
  );
};

export default HorizontalCardType;
