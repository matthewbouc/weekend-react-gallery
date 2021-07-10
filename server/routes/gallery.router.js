const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
//BASE MODE // const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE


router.put('/like/:id', (req, res) => {
    const pictureId = req.params.id;
    const pictureLikes = req.body.likes;
    console.log('req.body:',req.body, 'req.body.likes', req.body.likes);

    const queryText = `UPDATE galleryItems SET likes=$1 WHERE id=$2;`;
    pool.query(queryText, [pictureLikes, pictureId])
    .then(response => {
        console.log('Success PUTting', response)
        res.sendStatus(202);
    })
    .catch(error => {
        console.log('ERROR PUTting', error);
        res.sendStatus(500);
    });
});


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

module.exports = router;