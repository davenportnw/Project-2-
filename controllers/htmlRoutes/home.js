
const router = require("express").Router(); 
const path = require('path'); 
var isAuthenticated = require('../../config/middleware/isAuthenitcated')



// If no API or html routes are hit send to 
router.get('/',isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, '../../public/home.html'));
    console.log('inside the get for home')
    /// with orm model 
    // lets serve some data about the user 

    res.render('home'); 

});


module.exports = router;

