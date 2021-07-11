import React, {useState} from 'react';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import useStyles from '../UseStyles/UseStyles';

import './GalleryItem.css';


function GalleryItem({item, putLikeButton, deleteTrashButton}){
    const classes = useStyles();

    //isPicture is used to toggle picture/text active.
    const [isPicture, setIsPicture] = useState(true);
    const [isHeartFull, setIsHeartFull] = useState(false);
    const [isTrashButton, setIsTrashButton] = useState(false);

    const toggleHeart = () => {
      setIsHeartFull(!isHeartFull);
    }

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
     * Accepts item.id when Like button is clicked.  Adds +1 to likes on server side.
     * Sends a PUT request to update the database Likes+1.
     * @param {Number} itemId 
     */
    const handleLikeButton = (itemId) => {
        putLikeButton(itemId);
    }

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