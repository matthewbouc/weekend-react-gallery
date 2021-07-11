import GalleryItem from "../GalleryItem/GalleryItem";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.grey[800],
    },

    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
      color: theme.palette.common.white,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));




function GalleryList({galleryItems, putLikeButton}){
    const classes = useStyles();
    return(
        <>
            <Grid container spacing={4}>
            {galleryItems.map(item => (
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <GalleryItem putLikeButton={putLikeButton} key={item.id} item={item} />
                        <CardContent className={classes.cardContent}>                  
                  </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </>
    )
}

export default GalleryList


