import GalleryItem from "../GalleryItem/GalleryItem";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import useStyles from "../UseStyles/UseStyles";


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


