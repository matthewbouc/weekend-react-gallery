function GalleryItem({item}){
    return (
        <>
            <div key={item.id}>
                <img height="200px" src={item.path} />
                <p>{item.description}</p>
                <h4>Likes: {item.likes}</h4>
            </div>
        </>
    )
}

export default GalleryItem