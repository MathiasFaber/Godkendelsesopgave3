const users = require('../HardUser')
var jwt = require('jsonwebtoken');



function loginController(req, res) {
    //Normalt vil man kigge om password og brugernavn stemmer, men det springer vi over
    var user = users[0]
    //normalt vil man gemme secret key et andet sted. 
    //Her laves en token, som dør om en time 
    const token = jwt.sign({user}, 'my_secret', { expiresIn: '1h' })
    res.json({
        token: token
    })
}

module.exports = loginController

