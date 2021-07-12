import axios from 'axios';
import React, { useState, useEffect } from 'react';

import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import NewItem from '../NewItem/NewItem';
import useStyles from '../UseStyles/UseStyles';



function App() {

  //Gives material-ui content styling classes
  const classes = useStyles();

  //Runs GET request on page load.
  useEffect(() => {
    getGalleryItems();
  },[]);

  //Allows state of galleryItems to change on Like button click and on new item POST.
  const [galleryItems, setGalleryItems] = useState([]);
  // Allows toggle of form inputs for new picture.
  const [isAddPic, setIsAddPic] = useState(false);

  /**
   * Toggles the form imported from NewItem
   */
  const handlePicButton = () => {
    setIsAddPic(!isAddPic);
  }

  /**
   * DELETE request containing specific id. Button click originates in GalleryItem.jsx
   * Runs getGalleryItems on Success.
   */
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
  
  /**
   * GET request to the database.  Runs setGalleryItems on success to update array.
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
                  My Life in Twelve Pictures
                </Typography>
                <Grid container justifyContent="center">
                <Grid item>
                
                <Button
                  onClick={() => handlePicButton()}
                  variant="contained"
                  className={classes.button} 
                  startIcon={<AddIcon />}
                >
                  Add Picture
                </Button>
                
                </Grid>
                </Grid>
                  {isAddPic && <NewItem postNewPic={postNewPic}/>}
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <GalleryList galleryItems={galleryItems} putLikeButton={putLikeButton} deleteTrashButton={deleteTrashButton}/>
            </Container>
          </main>
    {/* Footer */}
    <footer className={classes.footer}>
      
    </footer>
    </>



  );
}

export default App;
