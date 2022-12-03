//objects

//how o create objects

// const person = {name: "pritesh" , age: 30};
// console.log(person);

//const key = "email";

const person = {
    name: "pritesh",
    age: 29,
    "person hobbies": ["study", "cricket"]

}
//console.log(person)
//how to access data from objects

// console.log(person.name);
// console.log(person.age);

person.gender ="male";
//console.log(person);


//differmce between dot and bracket notation

//console.log(person.hobbies);
// person[key] = "pritesh@gmail.com";

// console.log(person)

//for in loop
//object.keys

for(let key in person)
{
    console.log(`${key} : ${person[key]}`);
}



