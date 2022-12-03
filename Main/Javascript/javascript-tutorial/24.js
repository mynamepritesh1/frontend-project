//Maps
//map is an iterable
//store data in orederd fashion
//store key value pair(like object)
//duplicate keys are not allowed 
//diff betn maps and object
//objects can only have string or symbol as keys
//in maps you can use anything as key
//like array,number, string


// const person = new Map();
// person.set('firstName', 'pritesh');
// person.set('lastName', 'ingale');
// person.set('age', '31');

// console.log(person);

// for(let key of person){
//     console.log(key)

// }

// const person = new Map([['firstName','pritesh'],['age','31']]);
// console.log(person)


//we can use to mapped other funtion also
const person1 ={
    id: 1,
    firstName: "pritesh"
}
 const person2 = {
    id:2,
    firstName: "priyanka"
 }

 const personInfo = new Map();
 personInfo.set(person1, {age: 19,gender:'male'});
 personInfo.set(person2, {age: 17,gender:'female'});

 console.log(person1.id);
 console.log(personInfo.get(person2).gender);
//  console.log(personInfo.get(person2).firstName);
console.log(person2.firstName)


