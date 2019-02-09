let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let favouriteThings = require('../models/favourite_things');

/* GET Contact List Page - READ Operation */
router.get('/', (req, res, next) => {
    favouriteThings.find((err, thingsList) =>{
        if(err) {
            return console.error(err);
        }else{
            console.log(thingsList);

            res.render('abouts/index',{
                title: 'Favourite Things',
                thingsList: thingsList
                });
        }
    });
});

module.exports = router;
