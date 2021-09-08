import { makeStyles } from '@material-ui/core/styles';

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
    backgroundColor: theme.palette.secondary.main,
  },
  textField: {
    width: 500,
    marginBottom: 10
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