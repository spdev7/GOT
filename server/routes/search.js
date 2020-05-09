var express = require("express");
var router = express.Router();
let Setup = require('../modal/setup.modal');


router.route('/search').get((req,res) => {
    Setup.find(req.query)
    .then(user => res.send(user))
    .catch(err => res.status(400).json('Error: '+err))
    //console.log(req.query);
    // res.send(`Search Route is established+${res.query}`);
})


module.exports = router;