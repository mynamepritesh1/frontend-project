//practice f classes
//inheritance in javascript


class Animal{
    constructor(name,age){
        this.age = age;
        this.name = name;
    }
    eat(){
        return`${this.name} is eating`
    }
    isSuperCute(){
        return this.age <=1
    }
    isCute(){
        return true;
    }
}
const animal = new Animal("cow" , 3);
console.log(animal);
console.log(animal.eat());

//dog class here we are creating subclass
//inhewrit the animal class 


class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age)
        this.speed = speed
    }
    eat(){
        return `Modified eat: ${this.name} is eating`
    }
    run(){
        return `${this.name} is runnning at ${this.speed} kmph`
    }

   
}

const tommy = new Dog("tommy" ,2,45);
console.log(tommy);
console.log(tommy.eat())
console.log(tommy.isCute());
console.log(tommy.run());

