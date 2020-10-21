//Denne variabel henter klassen freeuser fra dokumentet user, og her arbejdes altså kun med freeuser. 
const user = require('./Model/user')

let userArray = [] 
let User1 = new user("Mathias", [2000, 02, 02], "Male", "Denmark", "mafaber@hotmail.dk", 
"hej123", 1, ["Soccer", "Pizza", "Cat Videos"], ["Bente", "Andre brugere han har matchet med", ]);


let User2 = new user("Bente", [1934, 01, 01], "Female", "Denmark", "Bente123@Mail.dk", 
"hehe", 2, ["Hockey", "Pizza", "dog Videos"], ["Mathias", "Andre burgere hun har matchet med"]);

//User 3 og 4, bruges i denne opgave blot til at vise hvordan man bruger Put requests.
//De fungerer altså som en opdatering til en allerede ekstisterende bruger. 

let User3 = new user("Mathias", [2000, 02, 02], "Male", "Denmark", "mafaber@hotmail.dk", 
 "hej123", 1, ["Soccer", "Hamburger", "zebra Videos"], ["Bente", "Hilda", "andre nye matches"]);


let User4 = new user("Bente", [1934, 01, 01], "Female", "Denmark", "Bente123@Mail.dk", 
"hehe", 2, ["Hockey", "Hamburger", "zebra Videos"], ["Mathias ", "Lars", "andre nye matches"]);


userArray = [User1, User2, User3, User4]

module.exports = userArray