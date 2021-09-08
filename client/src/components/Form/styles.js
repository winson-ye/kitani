import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    padding: theme.spacing(3),
  },
  caption: {
    marginBottom: 10
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    textDecoration: 'none',
  },
  textField: {
    width: 500,
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      width: 275
    },
  },
  buttonClear: {
    width: '100%'
  },
  fileInput: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: '10px'
  },
  buttonSubmit: {
    marginBottom: 10,
    width: '100%'
  },
}));