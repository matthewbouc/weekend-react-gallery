import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryItems}){
    return(
        <>
            <div>
                {galleryItems.map(item => (
                    <GalleryItem key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

export default GalleryList