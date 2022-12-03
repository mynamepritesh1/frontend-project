//dom use
//change text
//textContext and innerText

// const mainHeading = 
// document.getElementById("main-heading");
// // mainHeading.textContent="The main heading"
// console.log(mainHeading)


//change the style of text

// const mainHeading = document.querySelector("#main-heading")
// mainHeading.style.border="3px solid green"
// mainHeading.style.backgroundColor="green"


//get and set attributes

const link = document.querySelector("a")
console.log(link.getAttribute("href"))

//change the above
link.setAttribute("href","https://codProg.com");
console.log(link.getAttribute("href"))

const inputElement = document.querySelector(".from-todo input")
console.log(inputElement.getAttribute("type"))

//get multiple elements using getElementsByClassName

const navItems = document.getElementsByClassName("nav-item"); //its gives html collection 
console.log(navItems);

//if we want particular item
console.log(navItems[0])


//get multiple elements using queryselectAll



const navItems1 = document.querySelectorAll(".nav-item"); //its gives nodeList
console.log(navItems1)

