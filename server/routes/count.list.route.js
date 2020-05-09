var express = require("express");
var router = express.Router();
let Setup = require('../modal/setup.modal');


router.route('/count').get((req,res) => {
    Setup.find()
        .then(user => res.send(user.map((ele) => ele.battle_number)))
        .catch(err => res.status(400).json('Error: '+err))
});

router.route('/list').get((req,res) => {
    Setup.find()
        .then(user => res.send(user))
        .catch(err => res.status(401).json('Error: '+err))
})

module.exports = router;