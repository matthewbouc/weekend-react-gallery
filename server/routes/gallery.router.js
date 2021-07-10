const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
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