import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  shimmerDisplay: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20,
    paddingTop: 2,
    '&:after': {
      display: 'table',
      content: ' ',
    },
    '&:before': {
      display: 'table',
      content: ' ',
    },
  },

  line: {
    display: 'inline-block',
    height: 10,
    marginTop: 7,
    marginBottom: 7,
    width: '100%',
    backgroundColor: '#f6f7f9',
  },

  titleLine: {
    display: 'inline-block',
    height: 21,
    marginTop: 7,
    marginBottom: 7,
    width: '100%',
    backgroundColor: '#f6f7f9',
  },

  lineTrunc: {
    width: 240,
  },

  shimmer: {
    backgroundImage:
      'linear-gradient(90deg,#f6f7f9 0,#e9ebee 20%,#f6f7f9 40%,#f6f7f9)',
    backgroundSize: '99% 100%',
    backgroundRepeat: 'no-repeat',
    // animation: '$shimmer 1s linear 1ms infinite backwards',
    //     animation-delay: 0.001s;
    // animation-direction: normal;
    // animation-duration: 1s;
    // animation-fill-mode: backwards;
    // animation-iteration-count: infinite;
    // animation-name: makeStyles-keyframes-shimmer-25;
    // animation-play-state: running;
    // animation-timing-function: linear;
    animationName: '$shimmer',
    animationDuration: 1,
    animationIterationCount: 'infinite',
    animationFillMode: 'backwards',
    animationTimingFunction: 'linear',
  },
  '@keyframes shimmer': {
    '0%': { backgroundPosition: '100% * 5 100%' },
    '100%': { backgroundPosition: '100% * 100 100%' },
  },
}));

export default useStyles;
