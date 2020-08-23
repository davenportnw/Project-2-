const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')


router.get('/', (res,req) => {
    console.log("you are on the dictionary page");
    let data = req.body;
    connection.query('SELECT full_name, email, phone_number FROM Employee WHERE full_name = ?', [data], function(err, data) {
        if(err) {
            return res.statusCode(500).end();
        }
        res.json( {full_name: data, email, phone_number});
    })
});



module.exports = router;
