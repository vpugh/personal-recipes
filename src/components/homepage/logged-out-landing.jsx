import React from 'react';
import CardContainer from '../shared/card-container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  impactSentence: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '0 40px',
  },
  paraHolder: {
    maxWidth: '70%',
    margin: '40px auto',
    textAlign: 'center',
    '& > p': {
      lineHeight: 1.4,
    },
  },
}));

const LoggedOutLanding = () => {
  const classes = useStyles();
  return (
    <CardContainer>
      <div className={`logo serif ${classes.impactSentence}`}>
        A great place to store readable versions of recipes.
      </div>
      <div className={classes.paraHolder}>
        <p>
          Honestly, a system I'm making for my mom to save her recipes. If it
          becomes something cool for others to use, then that's great!
        </p>
        <p>
          Kind of a test if I could build something like this, blame the
          quarantine.
        </p>
        <p>
          If I get this to work, maybe I can work on porting it to an app, using
          React Native. Baby steps though, get this working first.
        </p>
      </div>
    </CardContainer>
  );
};

export default LoggedOutLanding;
