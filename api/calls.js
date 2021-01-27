require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;
const { newQuizRound } = require('./helpers/quiz')

router.get('/newtweet', async (req, res) => {
    const quiz = await newQuizRound(req.query.q, 4)
    res.json(quiz)
})

module.exports = router;