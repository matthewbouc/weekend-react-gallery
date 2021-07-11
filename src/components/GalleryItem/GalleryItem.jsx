import React, {useState} from 'react';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import './GalleryItem.css';


function GalleryItem({item, putLikeButton}){
    //isPicture is used to toggle picture/text active.
    const [isPicture, setIsPicture] = useState(true);

    const [isHeartFull, setIsHeartFull] = useState(false);

    const toggleHeart = () => {
      setIsHeartFull(!isHeartFull);
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
        putLikeButton(itemId)
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
                <div onMouseEnter={()=> toggleHeart()}
                        onMouseLeave={() => toggleHeart()}>
                    { !isHeartFull && <FavoriteBorderRoundedIcon 
                        onClick={()=> handleLikeButton(item.id)}
                        color="secondary" fontSize="medium" />}
                    { isHeartFull && <FavoriteRoundedIcon 
                        onClick={()=> handleLikeButton(item.id)}
                        color="secondary" fontSize="medium" />}
                </div>
                </CardActions>
            </div>
        </>
    )
}

export default GalleryItem