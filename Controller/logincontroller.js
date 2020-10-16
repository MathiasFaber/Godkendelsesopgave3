const users = require('../HardUser')
var jwt = require('jsonwebtoken');



function loginController(req, res) {
    //Her ville brugeren normalt skulle logge ind med brugernavn og password, som så skal valideres før man får et token. 
    //Denne del er dog sprunget over, og brugeren får et token uden at logge ind. Det er blot gjort for at simplificere. 
    var user = users[0]
    
    //Her laves en token, som dør om en time 
    const token = jwt.sign({user}, 'my_secret', { expiresIn: '1h' })
    res.json({
        token: token
    })
}

module.exports = loginController

