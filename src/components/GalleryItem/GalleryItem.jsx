import React, {useState} from 'react';

function GalleryItem({item, putLikeButton}){
    //isPicture is used to toggle picture/text active.
    const [isPicture, setIsPicture] = useState(true);
    
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
     * @param {Number} itemId 
     * @param {Number} currentLikes 
     */
    const handleLikeButton = (itemId, currentLikes) => {
        currentLikes += 1
        putLikeButton(itemId, currentLikes)
    }

    return (
        <>
            <div key={item.id}>
                <form onClick={togglePicture}>
                    { isPicture && <img height="200px" src={item.path} /> }
                    { !isPicture && <p>{item.description}</p> }
                </form>
                <button onClick={()=> handleLikeButton(item.id, item.likes)} >Like This Picture</button>
                <h4>Likes: {item.likes}</h4>
            </div>
        </>
    )
}

export default GalleryItem