//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 3000
const HardUser = require("./HardUser.js")


const userController = require('./Controller/userController')
const protectedController = require('./Controller/Protectedcontroller')
const loginController = require('./Controller/loginController')

//henter middleware
const ensureToken = require('./Middleware/ensureToken')
//read endpoint på routen '/'. Her ses alle brugerne. 
server.get('/', userController)

//server.post('/login', loginController). Dette post request giver en token, som kan bruges til at logge ind på de sider som er protected.
//For at komme ind på de sider, hvor der laves CRUD-endpoints til herunder, skal der bruges et token til at komme ind.
//På den måde er siderne beskyttet, og brugerne skal være logget ind, før de kan komme ind på siderne. 
server.post('/login', loginController)

// (/login) giver mig et token, men hvordan bruger jeg det token til at komme ind på den (/protected) hjemmeside??



//CRUD for users
//get request for user1 arrayet. dvs alle oplysnignerne om user 1
server.get('/user1', ensureToken,  protectedController, (req, res)=> {
    res.send(HardUser[0]);
})

//Post (create) request for user2 arrayet. Her tilføjes bruger nr. 2
server.post('/user2', ensureToken,  protectedController, (req, res)=>{
    res.send("Ny bruger tilføjet: " + HardUser[1]);
})

//Sletter min hardcodede user. 
server.delete('/user2delete', ensureToken,  protectedController, (req, res)=>{
    res.send('Har slettet:' + " " + HardUser[1].name);
})

//Denne update request opdaterer en bruger, men da brugerne er hardcodet er dette blot vist ved at,
//lave en ny bruger ud fra user 1, men med nogle få ændringer. (ændringen hedder User3 i HardUser.js dokumentet.)
server.put('/user1put', ensureToken,  protectedController, (req, res)=>{
    res.send(HardUser[2]);
})

//CRUD for Match
//Get request på user 1's matches. Han har matchet med bente. Match nummer 2 er "andre brugere" -
//som skal vise at hans andre matches ville komme ind i det array, hvis han havde flere matches.
server.get('/user1getmatch', ensureToken,  protectedController, (req, res)=>{
    res.send(HardUser[0].match);
})

//Get request for user 2's matches
server.get('/user2getmatch', ensureToken, protectedController, (req, res)=>{
    res.send(HardUser[1].match);
})

//Dette request sletter alle de matches som bruger 1 har.
server.delete('/user2deletematches', (req, res)=>{
    res.send('Har slettet følgende matches:' + " " + HardUser[1].match);
})

//Denne update request opdaterer de matches som bruger 1 har. Dvs. at han har ændret sine matches. 
//Dette vises ved brug af en ny hardcodet user med nogle få ændringer i forhold til user 1 match. 
server.put('/user1putmatches', (req, res)=>{
    res.send(HardUser[2].match);
})


//CRUD for Interests
//Get request på user 1's interests array. 
server.get('/user1getinterests', (req, res)=>{
    res.send(HardUser[0].interests);
})

//Get request for user 2's interests array.
server.get('/user2getinterests', (req, res)=>{
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



//server aktiveres ved at lytte på localhost port 3000 
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})