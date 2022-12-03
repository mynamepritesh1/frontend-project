//iterables
//jispe hum for loop laga sake
// String, array are iterable
const firstName = "pritesh";
for(char of firstName){
    console.log(char);

}

//array like object
// object is not iterable
// jinke pass length property hoti HTMLDetailsElement
console.log(firstName.length);
console.log(firstName.charAt(3))