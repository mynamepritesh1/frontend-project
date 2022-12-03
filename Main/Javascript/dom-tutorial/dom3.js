//get multiple elements using getElementsByClassName

//  const navItems = document.getElementsByTagName("a"); //its gives html collection 
// console.log(navItems);

//if we want particular item
// console.log(navItems[0])


//get multiple elements using queryselectAll



// const navItems1 = document.querySelectorAll(".nav-item"); //its gives nodeList
// console.log(navItems1)

//we cant use forEach method to iterate through HTMLCollectin 
//simple for loop 
//forEach

// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor ="aquagreen";
//     navItem.style.color = "black";
//     navItem.style.font = "bold";


    
// }

//usig for of loop 
// for (const navItem of navItems) {
//     //const navItem = navItems[i];
//          navItem.style.backgroundColor ="aquagreen";
//          navItem.style.color = "red";
//          navItem.style.font = "bold";
    
    
// }

//using for each loop
//change the html collcection to array
// navItems = Array.from(navItem);
// console.log(Array.isArray(navItems))

// navItems.forEach(navItem => {
//     navItem.style.backgroundColor ="green";
//     navItem.style.color = "red";
//     navItem.style.font = "bold";
        
    
// });

const navItems = document.getElementsByTagName("a"); //its gives html collection 

//simple for loop 
//for of loop 
//forEach

// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor ="aquagreen";
//     navItem.style.color = "red";
//     navItem.style.font = "bold";
    
// };
