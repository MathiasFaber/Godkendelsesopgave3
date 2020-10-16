class user {
    constructor(name, birthday, gender, location, email, password, uniqueUserID, interests, match)
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
    };
}

class paymentUser extends user{
    constructor(name, birthday, gender, location, email, password, uniqueUserID, cardHolderName, expireDate, cardNumber, cvcNumber)
    {
    super(name, birthday, gender, location, email, password, uniqueUserID, cardHolderName)
        this.expireDate = expireDate;
        this.cardNumber = cardNumber;
        this.cvcNumber = cvcNumber;
    // super like?
    }
}

class freeUser extends user{
    constructor(name, birthday, gender, location, email, password, uniqueUserID, interests, match)
    {
        super(name, birthday, gender, location, email, password, uniqueUserID, interests, match)
    }
}

class image {
    contructor(imagefile)
    {
        this.imagefile = imagefile;
       
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
