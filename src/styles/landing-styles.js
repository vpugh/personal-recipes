import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 18
  },
  subTitle: {
    fontSize: '16px',
    lineHeight: '22px',
    color: '#F65B5B',
    fontWeight: 'normal',
    marginTop: 0
  },
  addedShadowBox: {
    background: '#FEFEFE',
    boxShadow: '4px 8px 44px #FFCCCC'
  },
  h3Title: {
    fontWeight: 'normal',
    margin: 0,
    fontSize: 18,
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  displayFlexCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  subFontSize: {
    fontSize: 10
  },
  addNewButton: {
    background: '#FF8585',
    boxShadow: ' 4px 8px 44px #FFCCCC',
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    paddingTop: 16,
    paddingBottom: 16,
    border: 'none',
    textDecoration: 'none'
  },
  cardText: props => ({
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: props.direction ? 151 : 30,
    marginRight: props.direction ? 30 : 151
  }),
  cardImg: {
    width: 262,
    height: 69
  }
});

export default useStyles;
