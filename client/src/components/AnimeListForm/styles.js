import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    caption: {
        marginBottom: 10
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textField: {
        width: 312
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
        marginBottom: 30
    }
}));