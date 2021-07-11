import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import GalleryList from '../GalleryList/GalleryList';
import useStyles from '../UseStyles/UseStyles';
import NewItem from '../NewItem/NewItem';


function App() {


  const classes = useStyles();

    //Run GET request on page load.
    useEffect(() => {
      getGalleryItems();
    },[]);

    //Allows state of galleryItems to change on Like button click and new item POST.
    const [galleryItems, setGalleryItems] = useState([]);
    const [isAddPic, setIsAddPic] = useState(false);

    /**
     * Toggles the form imported from NewItem
     */
    const handlePicButton = () => {
      setIsAddPic(!isAddPic);
    }
    
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
     * Takes in an object containing new picture path(url) and description. Sends POST
     * request.  Runs getGalleryItems request on success.
     */
    const postNewPic = (newPicture) => {
      console.log('in postNewPic', newPicture);
      axios.post('/gallery', (newPicture))
      .then(response => {
        getGalleryItems();
      })
      .catch(error => {
        console.log('Error POSTing from App', error)
      });
    }

    /**
     * Sends PUT request to server to update Likes for specific id. Originates in GalleryItem.jsx
     */
    const putLikeButton = (pictureId) => {
      axios.put(`/gallery/like/${pictureId}`)
      .then(response => {
        console.log('Success PUTting in App', response);
        getGalleryItems();
      })
      .catch(error => {
        console.log('error PUTting', error);
      })
    }

    const deleteTrashButton = (pictureId) => {
      axios.delete(`gallery/${pictureId}`)
      .then(response => {
        console.log('Successful Delete', response);
        getGalleryItems();
      })
      .catch(error => {
        console.log('error DELETEing on App', error);
      });
    }

   
    return (
      <>
        <CssBaseline />
            <AppBar className={classes.albumLayout} position="relative">
              <Toolbar>
                <CameraIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                  Photo Album
                </Typography>
              </Toolbar>
            </AppBar>
            <main>
              {/* Hero unit */}
              <div className={classes.heroContent}>
                <Container maxWidth="sm">
                  <Typography component="h1" variant="h2" align="center" gutterBottom>
                    React Album
                  </Typography>
                  <Typography variant="h5" align="center" paragraph>
                    A summary of animals I've encountered online
                  </Typography>
                  <Grid container justifyContent="center">
                  <Grid item>
                  <Button onClick={() => handlePicButton()} variant="contained" className={classes.button} >
                    Add New Picture
                  </Button>
                  </Grid>
                  </Grid>
                    {isAddPic && <NewItem postNewPic={postNewPic}/>}
                </Container>
              </div>
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <GalleryList galleryItems={galleryItems} putLikeButton={putLikeButton}/>
              </Container>
            </main>
      {/* Footer */}
      <footer className={classes.footer}>
        
      </footer>
      </>



    );
}

export default App;
