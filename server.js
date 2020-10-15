//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 3000
const HardUser = require("./HardUser.js")


//henter controller fra sti
const userController = require('./Controller/userController')
const protectedController = require('./Controller/Protectedcontroller')
const loginController = require('./Controller/loginController')

//henter middleware
const ensureToken = require('./Middleware/ensureToken')
//read endpoint på routen '/'. Her ses alle brugerne. 
server.get('/', userController)

server.get('/protected', ensureToken,  protectedController)
server.post('/login', loginController)

// (/login) giver mig et token, men hvordan bruger jeg det token til at komme ind på den (/protected) hjemmeside??


//CRUD for users
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

//Denne update request opdaterer en bruger, men da brugerne er hardcodet er dette blot vist ved at,
//lave en ny bruger ud fra user 1, men med nogle få ændringer. 
server.put('/user1put', (req, res)=>{
    res.send(HardUser[2]);
})

//CRUD for Match
//Get request på user 1's matches. Han har matchet med bente. Match nummer 2 er "andre brugere" -
//som skal vise at hans andre matches ville komme ind i det array, hvis han havde flere matches.
server.get('/user1matchget', (req, res)=>{
    res.send(HardUser[0].match);
})

//Get request for user 2 matches
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

//Dette request sletter alle de matches som bruger 1 har.
server.delete('/user2deletematches', (req, res)=>{
    res.send('Har slettet følgende matches:' + " " + HardUser[1].match);
})

//Denne update request opdaterer de matches som bruger 1 har. Dvs. at han har ændret sine matches. 
server.put('/user1putmatches', (req, res)=>{
    res.send(HardUser[2].match);
})


//CRUD for Interests
//Get request på user 1's interests array. 
server.get('/user1interestsget', (req, res)=>{
    res.send(HardUser[0].interests);
})

//Get request for user 2's interests array.
server.get('/user2interestsget', (req, res)=>{
    res.send(HardUser[1].interests);
})

//Post request for user1 interests array.
server.post('/user1interestspost', (req, res)=>{
    res.send(HardUser[0].interests);
})

//Post request for user2 interests array.
server.post('/user2interestspost', (req, res)=>{
    res.send(HardUser[1].interests);
})

//Dette request sletter alle de interests som bruger 1 har.
server.delete('/user1deleteinterests', (req, res)=>{
    res.send('Har slettet følgende interests hos bruger 1:' + " " + HardUser[1].interests);
})

//Denne update request opdaterer de interests som bruger 1 har. Dvs. at han har ændret sine interesser på sin profil. 
server.put('/user1putinterests', (req, res)=>{
    res.send(HardUser[2].interests);
})



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