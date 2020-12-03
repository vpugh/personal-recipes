import React from 'react';
import CardContainer from '../../components/page-container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  impactSentence: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 34,
    padding: '0 30px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 50,
      padding: '0 60px',
    },
  },
  paraHolder: {
    maxWidth: '90%',
    textAlign: 'center',
    margin: '40px auto',
    '& > p': {
      lineHeight: 1.4,
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '72%',
    },
  },
}));

const LoggedOut = () => {
  const classes = useStyles();
  return (
    <CardContainer>
      <div className={`logo serif ${classes.impactSentence}`}>
        A great place to store readable versions of recipes.
      </div>
      <div className={classes.paraHolder}>
        <p>
          This is a system I'm making for my mom to save her recipes. If it
          becomes something for others to use, that's great! Kind of a test if I
          could build something like this, I blame the quarantine/COVID 19.
        </p>
        <p>
          If I get this to work, maybe I can work on porting it to a mobile app,
          using React Native. Baby steps though, get this working first. Walk
          before you run.
        </p>
      </div>
    </CardContainer>
  );
};

export default LoggedOut;
