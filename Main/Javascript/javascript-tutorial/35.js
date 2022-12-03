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
    static classInfo(){
        return 'this is a static function'
    }
    eat(){
        return `Modified eat: ${this.name} is eating`
    }
    run(){
        return `${this.name} is runnning at ${this.speed} kmph`
    }


}

const person = new pritesh("priyanka" , "ingale" , 24);
console.log(person)
const ans = pritesh.classInfo();
console.log(ans);