import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paperHeading: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  followButton: {
    marginLeft: 40
  }
}));