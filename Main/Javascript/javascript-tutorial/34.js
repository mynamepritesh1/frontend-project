//getters and setters and constructor

class pritesh{
    //construcotr
    constructor(firstName,Lastname,age,){
        this.firstName = firstName;
        this.Lastname = Lastname;
        this.age = age;

    }
    //getters 
   get fullName(){
        return `${this.firstName} ${this.Lastname}`
    }
    //setters
    set fullName(fullName)
    {
        const [firstName,Lastname,age] = fullName.split(" ")
        this.firstName = firstName;
        this.Lastname = Lastname;
        this.age = age

    }

}

const person = new pritesh("pritesh", "ingale" , "31")
console.log(person);
person.fullName = "priyanka ingale 24"
console.log(person)
