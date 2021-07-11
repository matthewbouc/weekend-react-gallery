import React, {useState} from 'react';

import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import useStyles from '../UseStyles/UseStyles';
import './GalleryItem.css';


function GalleryItem({item, putLikeButton, deleteTrashButton}){

    //Gives material-ui styling classes
    const classes = useStyles();

    //States are used to toggle picture/text and outline/filled.
    const [isPicture, setIsPicture] = useState(true);
    const [isHeartFull, setIsHeartFull] = useState(false);
    const [isTrashButton, setIsTrashButton] = useState(false);

    //Toggles between outline and filled heart(favorite) icon
    const toggleHeart = () => {
      setIsHeartFull(!isHeartFull);
    }
    //Toggles between outline and filled trash(delete) icon
    const toggleTrash = () => {
        setIsTrashButton(!isTrashButton);
    }

    /**
     * Changes the state of isPicture when <form> is clicked.
     */
    const togglePicture = () => {
        console.log('Clicked Picture to Toggle');
        setIsPicture(!isPicture);
    }

    /**
     * Accepts item.id when Like button is clicked.
     * Sends a PUT request to update the database with query of Likes+1.
     */
    const handleLikeButton = (itemId) => {
        putLikeButton(itemId);
    }

    /**
     * Accepts item.id when trash can icon is clicked.  Run DELETE request 
     */
    const handleDeleteButton = (itemId) => {
        deleteTrashButton(itemId);
    }

    return (
        <>
            <div key={item.id}>
                <div onClick={togglePicture}>
                    { isPicture && <img className="cardImage"  src={item.path} /> }
                    { !isPicture && <Typography variant="h5" align="center" className="cardText">{item.description}</Typography> }
                </div>
                <h2>Likes: {item.likes}</h2>
                <CardActions>
                    <IconButton
                        onMouseEnter={()=> toggleHeart()}
                        onMouseLeave={() => toggleHeart()}
                        onClick={()=> handleLikeButton(item.id)}
                    >
                        { !isHeartFull && <FavoriteBorderRoundedIcon
                            color="secondary" fontSize="medium" />}
                        { isHeartFull && <FavoriteRoundedIcon 
                            color="secondary" fontSize="medium" />}
                    </IconButton>
                    <IconButton
                        onMouseEnter={()=> toggleTrash()}
                        onMouseLeave={() => toggleTrash()}
                        onClick={()=> handleDeleteButton(item.id)}
                    >
                        { !isTrashButton&& <DeleteOutlineIcon 
                            fontSize="medium" className={classes.trashButton} />}
                        { isTrashButton && <DeleteIcon
                            fontSize="medium" className={classes.trashButton} />}
                    </IconButton>
                </CardActions>
            </div>
        </>
    )
}

export default GalleryItem