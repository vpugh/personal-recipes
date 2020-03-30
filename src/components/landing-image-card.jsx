import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardText: props => ({
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    [theme.breakpoints.up('md')]: {
      marginLeft: props.direction === 'left' ? 151 : 30,
      marginRight: props.direction === 'left' ? 30 : 151
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: props.direction === 'left' ? 0 : 30,
      marginRight: props.direction === 'left' ? 30 : 0
    }
  }),
  cardImg: {
    [theme.breakpoints.up('md')]: {
      width: 262
    },
    height: 69
  },
  cardLink: {
    background: '#FF8585',
    boxShadow: '2px 4px 24px rgba(255, 132, 132, 0.58)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      marginBottom: 40
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20
    },
    textDecoration: 'none'
  }
}));

const ImageCard = props => {
  const { text, img, direction, to = '/' } = props;
  const classes = useStyles(props);
  return (
    <Link className={classes.cardLink} to={to}>
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
