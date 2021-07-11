import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    albumLayout: {
      backgroundColor: '#482880',
      color: 'black',
    },
    button: {
      background: '#673ab7',
      color: 'white',
      marginBottom: '10px',
      boxShadow: '0 1px 3px 2px rgba(0, 0, 0, .3)',
    },
    icon: {
      marginRight: theme.spacing(2),
      color: 'black',
    },
    heroContent: {
      backgroundColor: theme.palette.grey[800],
      padding: theme.spacing(8, 0, 6),
      color: 'white',
    },
    cardGrid: {
      backgroundColor: theme.palette.grey[900],
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      backgroundColor: theme.palette.grey[800],
      flexGrow: 1,
      color: 'white',
    },
    footer: {
      backgroundColor: theme.palette.grey[800],
      padding: theme.spacing(6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.grey[800],
    },
  }))

  export default useStyles