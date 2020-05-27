import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  hoverLink: {
    '&:hover': {
      cursor: 'pointer',
      boxShadow: `1px 2px 10px ${theme.palette.primary.secondary}`,
      color: '#5f5f5f',
    },
  },
  button: {
    border: `1px solid ${theme.palette.primary.pale}`,
    boxSizing: 'border-box',
    boxShadow: `2px 4px 22px ${theme.palette.primary.pale}`,
    display: 'inline-block',
    padding: '16px 38px',
    transition: '300ms ease-in-out',
  },
}));

export default useStyles;
