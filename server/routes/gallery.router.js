const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


/**
 * GETs all rows from galleryItems TABLE, ordered by id.  See getGalleryItems() in App.jsx
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM galleryItems ORDER BY id ASC;`;
    pool.query(queryText)
    .then(result => {
        console.log('Database sending result: ', result);
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Database GET failed', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const newItem = req.body;
    console.log(newItem);
    const queryText = `INSERT INTO galleryItems (path, description) VALUES ($1, $2);`;

    pool.query(queryText, [newItem.path, newItem.description])
    .then(response => {
        console.log('Success POSTing to DB', response);
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('Error POSTing to DB', error);
        res.sendStatus(500);
    })
});

/**
 * PUT request that updates the number of likes (by one) of a specific id.
 * Originates in handleLikeButton() found in GalleryItem.jsx
 */
router.put('/like/:id', (req, res) => {
    const pictureId = req.params.id;
    //console.log('req.body:',req.body, 'req.body.likes', req.body.likes);

    const queryText = `UPDATE galleryItems SET likes=(likes+1) WHERE id=$1;`;
    pool.query(queryText, [pictureId])
    .then(response => {
        console.log('Success PUTting', response)
        res.sendStatus(202);
    })
    .catch(error => {
        console.log('ERROR PUTting', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    const pictureId = req.params.id;

    const queryText = `DELETE FROM galleryItems WHERE id=$1;`;
    pool.query(queryText, [pictureId])
    .then(response => {
        console.log('SUCCESS DELETEing', response);
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('ERROR DELETEing', error);
        res.sendStatus(500);
    })
})


module.exports = router;




//BASE MODE // const galleryItems = require('../modules/gallery.data');
// DO NOT MODIFY THIS FILE FOR BASE MODE

//BASE MODE// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
//}); // END PUT Route

// BASE MODE // GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
//}); // END GET Route