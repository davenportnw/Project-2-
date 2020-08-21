
const router = require("express").Router(); 
const path = require('path'); 

router.get('/results', function(req, res){
    res.sendFile(path.join(__dirname, 'views/directory.handlebars'));
});

module.exports = router;
