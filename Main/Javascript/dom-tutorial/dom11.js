//evnt object

 console.log("script start")
const Buttons = document.querySelectorAll(".my-buttons button");

//  Buttons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0;
//         for (let i = 0; i <=10000000; i++) {
//            num += i;            
//         }
//         // console.log(e.currentTarget.textContent, num);
//     })
//  })

//  let outerVar = 0;
//  for(i=0;i<=10000000; i++);
//  outerVar += i;


//  console.log("script end",outerVar);

//little practice on click button

Buttons.forEach(button =>{
    button.addEventListener("click" , (e)=>{
        e.target.style.backgroundColor ="blue";
        e.target.style.color = "#333";
    })
})
