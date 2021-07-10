import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryItems, putLikeButton}){
    return(
        <>
            <div>
                {galleryItems.map(item => (
                    <GalleryItem putLikeButton={putLikeButton} key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

export default GalleryList