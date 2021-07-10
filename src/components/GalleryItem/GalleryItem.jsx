import React, {useState} from 'react';

function GalleryItem({item}){

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
                    <h4>Likes: {item.likes}</h4>
            </div>
        </>
    )
}

export default GalleryItem