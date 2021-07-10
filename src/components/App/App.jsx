import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';


function App() {

    useEffect(() => {
      getGalleryItems();
    },[]);

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
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryItems={galleryItems} />
      </div>
    );
}

export default App;
