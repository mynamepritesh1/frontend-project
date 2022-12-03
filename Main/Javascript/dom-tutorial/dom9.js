//static list and live list

//queryselector humein static list degi 
//getElementBySomething humen live list degin 

// const ul = document.querySelector(".todo-list")
// const listItems = ul.getElementsByTagName("li");

// const sixthli = document.createElement("li");
// sixthli.textContent = "item 6";

// ul.append(sixthli);
// console.log(listItems);

 //how to get the dimensions of element

 //height and width

 const section = document.querySelector(".todo-section");
 const info = section.getBoundingClientRect();
 console.log(info);
 