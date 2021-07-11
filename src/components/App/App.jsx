import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GalleryList from '../GalleryList/GalleryList';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  albumLayout: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.black,
  },
  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.black,
  },
  heroContent: {
    backgroundColor: theme.palette.grey[800],
    padding: theme.spacing(8, 0, 6),
    color: theme.palette.common.white,
  },
  cardGrid: {
    backgroundColor: theme.palette.grey[900],
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    backgroundColor: theme.palette.grey[800],
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.grey[800],
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function App() {


  const classes = useStyles();
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
      {/* <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList putLikeButton={putLikeButton} galleryItems={galleryItems} />
      </div> */}


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
                  <div className={classes.heroButtons}>
                    
                  </div>
                </Container>
              </div>
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <GalleryList galleryItems={galleryItems} putLikeButton={putLikeButton}/>
              </Container>
            </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      </>



    );
}

export default App;
