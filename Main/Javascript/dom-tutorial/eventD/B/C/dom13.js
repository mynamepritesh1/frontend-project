
//capturing event
const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// child.addEventListener('click',()=>{
//     console.log("capture !!!! child")
// }, true)

// parent.addEventListener('click',()=>{
//     console.log("capture !!!! parent")
// }, true)

// grandparent.addEventListener('click',()=>{
//     console.log("capture !!!! grandparent")
// }, true)

// //event Bubbling
// child.addEventListener('click',()=>{
//     console.log("you clicked on child")
// })

// parent.addEventListener('click',()=>{
//     console.log("you clicked on parent")
// })

// grandparent.addEventListener('click',()=>{
//     console.log("you clicked on grandparent")
// })

// event delegation
grandparent.addEventListener("click",()=>{
    console.log("You clicked on grandparent")
});
