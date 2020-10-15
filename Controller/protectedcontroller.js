users = require('../HardUser')
var jwt = require('jsonwebtoken');

function loginController(req, res) {
    //man kunne også tjekke her om token findes. 
    jwt.verify(req.token, 'my_secret', function(err, data){
        if(err){
            res.sendStatus(401);
        } else{
            res.json({
                msg: "Det her er beskyttet",
                data: data
            })
        }
    }) 
}

module.exports = loginController