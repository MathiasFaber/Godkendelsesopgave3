//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 3000
const HardUser = require("./HardUser.js")


//henter controller fra sti
const userController = require('./Controller/userController')
//const protectedController = require('./Controller/Protectedcontroller')
//const loginController = require('./Controller/loginController')

//henter middleware
//const ensureToken = require('./Middleware/ensureToken')
//read endpoint på routen '/'
server.get('/', userController)

//server.get('/protected', ensureToken,  protectedController)

//get request for user1 arrayet. dvs alle oplysnignerne om user 1
server.get('/user1', (req, res)=> {
    res.send(HardUser[0]);
})

//get request for user2 arrayet
server.get('/user2', (req, res)=>{
    res.send(HardUser[1]);
})

//Post request for user1 arrayet

server.post('/user1post', (req, res)=>{
    res.send(HardUser[0]);
})

//Post request for user2 arrayet

server.post('/user2post', (req, res)=>{
    res.send(HardUser[1]);
})

//Sletter min hardcodede user. (dette giver ikke rigtigt mening i denne opgave, da vi hardcoder)
//Dette request kan bruges, hvis man ikke havde hardcodet brugerne, og på den måde slette et match
server.delete('/user2delete', (req, res)=>{
    res.send('Har slettet:' + " " + HardUser[1].name);
})

//??
server.put('/user3put', (req, res)=>{
    res.send(HardUser[2]);
})


//get request på user 1's matches. Han har matchet med bente. Match nummer 2 er "andre brugere" -
//som skal vise at hans andre matches ville komme ind i det array, hvis han havde flere matches.
server.get('/user1matchget', (req, res)=>{
    res.send(HardUser[0].match);
})

//user 2 matches
server.get('/user2matchget', (req, res)=>{
    res.send(HardUser[1].match);
})

//Post request for user1 match array

server.post('/user1matchpost', (req, res)=>{
    res.send(HardUser[0].match);
})

//Post request for user2 match array

server.post('/user2matchpost', (req, res)=>{
    res.send(HardUser[1].match);
})

//lav resten af requestne for interest og match




//server.post('/login', loginController)

//server aktiveres
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})


/* 
er get, post request rigtgt?
Kan man lave put request på vores måde?
Delete request??
Hints til classer
*/