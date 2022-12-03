//intro event

//click

//there are three types for add event

//1-
// const btn = document.querySelector(".brn-headline");
//method --addEventListner
// function clickme(){
//     console.log("you clicked me....!")
// }
// btn.addEventListener("click")


//this keyword

// btn,addEventListener("click" , function(){
//     console.log("you cliked me....")
//     console.log("value of this")
//     console.log(this)
// })

const Buttons = document.querySelectorAll(".my-buttons button");

//for click all button 
// firstButton.addEventListener("click", function(){
//     console.log("yes you clicked first button ");


// });
//if we click any button and we want use only content 
//of that button then use for of or for each loop
// for (const button of Buttons) {
//     button.addEventListener("click" , function(){
//         console.log(this.textContent);

//     })
    
// }

Buttons.forEach(function(button) {
    button.addEventListener("click" , function(){
        console.log(this.textContent);

    })
    

    
});