//USED FOR BASE MODE.  SET ASIDE WHEN INTRODUCING MATERIAL-UI

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

    /**
     * Run GET request on page load.
     */
    useEffect(() => {
      getGalleryItems();
    },[]);

    //Allows state of galleryItems to change on Like button click and new item POST.
    let [galleryItems, setGalleryItems] = useState([]);
    
    /**
     * GETs gallery items from /gallery and sets to galleryItems
     */
    const getGalleryItems = () => {
      axios.get('/gallery')
      .then(response => {
        console.log('Success GETting in App')
        setGalleryItems(response.data);
      })
      .catch(error => {
        console.log('error in App GETting', error);
      })
    }

    /**
     * Sends PUT request to server to update Likes for specific id. Originates in GalleryItem.jsx
     * @param {Number} pictureId 
     * @param {Number} pictureLikes 
     */
    const putLikeButton = (pictureId, pictureLikes) => {
      axios.put(`/gallery/like/${pictureId}`, {likes: pictureLikes})
      .then(response => {
        console.log('Success PUTting in App', response);
        getGalleryItems();
      })
      .catch(error => {
        console.log('error PUTting', error);
      })
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList putLikeButton={putLikeButton} galleryItems={galleryItems} />
      </div>
    );
}