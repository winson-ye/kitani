import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginBottom: '30px',
    padding: theme.spacing(2)
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    width: '50%'
  },
  buttonClear: {
    width: '50%'
  },
  fileInput: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '50%',
    marginBottom: '10px'
  },
  buttonSubmit: {
    marginBottom: 10,
    width: '50%'
  },
}));