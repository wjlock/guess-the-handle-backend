// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
  });

// Models
const db = require('../models');

// GET api/highscores/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Highscores endpoint OK!'});
});

useEffect(() => {
    client.get('search/tweets.json?q=sports&result_type=popular', function(error, response) {
        if(error) throw error;
        console.log(response);  // Raw response object.
      });

})

//Test route for twitter API
router.get('/twitter', (req, res) => {
    client.get(''search/tweets.json?q=sports&result_type=popular', function(error, response) {
        if(error) throw error;
        console.log(response);')
        


module.exports = router;