//henter User model
const user = require('./Model/user')

let userArray = [] 
let User1 = new user("Mathias", [2000, 02, 02], "Male", "Denmark", "mafaber@hotmail.dk", "hej123", 1, ["Soccer", "Pizza", "Cat Videos"], ["Bente", "Andre brugere han har matchet med", ]);
let User2 = new user("Bente", [1934, 01, 01], "Female", "Denmark", "Bente123@Mail.dk", "hehe", 2, ["Hockey", "Pizza", "dog Videos"], ["Mathias", "Andre burgere hun har matchet med"]);


let User3 = new user("Mathias", [2000, 02, 02], "Male", "Denmark", "mafaber@hotmail.dk", "hej123", 1, ["Soccer", "Hamburger", "zebra Videos"]);
let User4 = new user("Bente", [1934, 01, 01], "Female", "Denmark", "Bente123@Mail.dk", "hehe", 2, ["Hockey", "Hamburger", "zebra Videos"]);


userArray = [User1, User2, User3, User4]

module.exports = userArray