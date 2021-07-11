import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    albumLayout: {
      backgroundColor: '#0276aa',
      color: 'white',
    },
    button: {
      background: '#0276aa',
      color: 'white',
      marginBottom: '10px',
      boxShadow: '0 1px 3px 2px rgba(0, 0, 0, .3)',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.grey[800],
      boxShadow: '0 1px 2px 1px rgba(255, 255, 255, 0.4)',
    },
    cardContent: {
      backgroundColor: theme.palette.grey[800],
      flexGrow: 1,
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
    footer: {
      backgroundColor: theme.palette.grey[800],
      padding: theme.spacing(6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    heroContent: {
      backgroundColor: theme.palette.grey[800],
      padding: theme.spacing(8, 0, 6),
      color: 'white',
    },
    icon: {
      marginRight: theme.spacing(2),
      color: 'black',
    },
    newForm: {
        margin: theme.spacing(1),
        width: '25ch',
        background: '#03a9f4',
    },
    newFormButton: {
      margin: theme.spacing(1),
      width: '22ch',
      background: '#007bb2'
    },
    trashButton: {
      color: 'white',
    },

  }))

  export default useStyles