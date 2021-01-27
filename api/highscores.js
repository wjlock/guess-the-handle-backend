// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;
// Models
// const db = require('../models');

// GET api/highscores/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Highscores endpoint OK!'});
});


module.exports = router;