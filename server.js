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

//get request for user1 arrayet
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

//sletter min hardcodede user. (dette giver ikke rigtigt mening i denne opgave, da vi hardcoder)
server.delete('/user2delete', (req, res)=>{
    res.send('Har slettet:' + " " + HardUser[1].name);
})

//??
server.put('/user3put', (req, res)=>{
    res.send(HardUser[2]);
})

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