import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
      marginLeft: 16
    }
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  profile: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logout: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: 10
    }
  },
  anilist: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 10
    }
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    textDecoration: 'none',
    marginRight: theme.spacing(2)
  },
}));