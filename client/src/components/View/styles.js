import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paperHeading: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heading: {
    display: 'flex',
    justifyContent: 'center'
  }
}));