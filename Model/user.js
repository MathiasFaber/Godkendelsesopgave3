class user {
    constructor(name, birthday, gender, location, email, password, uniqueUserID, interests, match /*interests*/)
    {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.location = location;
        this.email = email;
        this.password = password;
        this.uniqueUserID = uniqueUserID;
        this.interests = interests;
        this.match = match; 
        //this.interests = new interests;


        //like funktion 
    };
}

class paymentUser extends user{
    constructor(name, birthday, gender, location, email, password, uniqueUserID, cardHolderName, expireDate, cardNumber, cvcNumber)
    {
    super(name, birthday, gender, location, email, password, uniqueUserID, cardHolderName)
        this.expireDate = expireDate;
        this.cardNumber = cardNumber;
        this.cvcNumber = cvcNumber;
    // add super like eller sådan noget
    }
}

class freeUser extends user{
    constructor(name, birthday, gender, location, email, password, uniqueUserID)
    {
        super(name, birthday, gender, location, email, password, uniqueUserID)
    }
}

class creditCard {
    contructor(cardHolderName, expireDate, cardNumber, cvcNumber)
    {
        this.cardHolderName = cardHolderName;
        this.expireDate = expireDate;
        this.cardNumber = cardNumber;
        this.cvcNumber = cvcNumber;
    }
}

//brug noget "filter" til filtrere mænd og kvinder til at matche
//class match {
    // if user1 interests = user2 interests
    //     create match
    //Hvordan laver vi match klasse?
//}

//Exporterer classen
module.exports = user;