import React, {useState} from 'react';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

import './GalleryItem.css';
import { classExpression } from '@babel/types';


function GalleryItem({item, putLikeButton}){
    //isPicture is used to toggle picture/text active.
    const [isPicture, setIsPicture] = useState(true);
    const [isHeartFull, setIsHeartFull] = useState(false);
    
    /**
     * Changes the state of isPicture when <form> is clicked.
     */
    const togglePicture = () => {
        console.log('Clicked Picture to Toggle');
        setIsPicture(!isPicture);
    }


    /**
     * Accepts item.id and item.likes when Like button is clicked.  Adds +1 to likes.
     * Sends a PUT request to update the database with new Likes amount.
     * This could be done on the server queryText likes: likes+1
     * @param {Number} itemId 
     * @param {Number} currentLikes 
     */
    const handleLikeButton = (itemId, currentLikes) => {
        currentLikes += 1
        putLikeButton(itemId, currentLikes)
    }

    const toggleHeart = () => {
        setIsHeartFull(!isHeartFull);
    }

    return (
        <>
            <div key={item.id}>
                <div onClick={togglePicture}>
                    { isPicture && <img className="cardImage"  src={item.path} /> }
                    { !isPicture && <p className="cardText">{item.description}</p> }
                </div>
                <div onMouseEnter={()=> toggleHeart()}
                     onMouseLeave={() => toggleHeart()}>
                { !isHeartFull && <FavoriteBorderRoundedIcon 
                    onClick={()=> handleLikeButton(item.id, item.likes)}
                    color="secondary" fontSize="medium" />}
                { isHeartFull && <FavoriteRoundedIcon 
                    onClick={()=> handleLikeButton(item.id, item.likes)}
                    color="secondary" fontSize="medium" />}
                </div>
                <h4>Likes: {item.likes}</h4>
            </div>
        </>
    )
}

export default GalleryItem