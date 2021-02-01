// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models');

// GET api/highscores/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Highscores endpoint OK!'});
});


router.post('/newhighscore', (req, res) => {
    db.Highscore.create({userid: req.body.userid, points: req.body.points, gamemode: req.body.gamemode})
    // const newHighscore = new Highscore({
    //     userid: req.body.userid,
    //     points: req.body.points,
    //     gamemode: req.body.gamemode
    
    // })
    console.log(db)
})

router.get('/allhighscores', (req, res) => {
    db.Highscore.find()
    .then((foundData) => {
        console.log(foundData)
        res.send(foundData)
    })

})



module.exports = router;