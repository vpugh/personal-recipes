import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  hoverLink: {
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '1px 2px 10px #f1afaf',
      color: '#5f5f5f'
    }
  },
  button: {
    border: '1px solid #FFCCCC',
    boxSizing: 'border-box',
    boxShadow: '2px 4px 22px #FFCCCC',
    display: 'inline-block',
    padding: '16px 38px',
    transition: '300ms ease-in-out'
  }
}));

export default useStyles;
