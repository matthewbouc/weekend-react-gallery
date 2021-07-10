import React, {useState} from 'react';

function GalleryItem({item, putLikeButton}){

    const [isPicture, setIsPicture] = useState(true);

    const togglePicture = () => {
        console.log('Clicked Picture to Toggle');
        setIsPicture(!isPicture);
    }

    return (
        <>
            <div key={item.id}>
                <form onClick={togglePicture}>
                    { isPicture && <img height="200px" src={item.path} /> }
                    { !isPicture && <p>{item.description}</p> }
                </form>
                <button onClick={()=> putLikeButton(item.id)} >Like This Picture</button>
                <h4>Likes: {item.likes}</h4>
            </div>
        </>
    )
}

export default GalleryItem