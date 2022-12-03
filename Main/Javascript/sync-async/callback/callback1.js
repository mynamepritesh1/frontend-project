//callbacks , callback hel, pyramid of dom
//async programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(()=>{
// heading1.textContent = "Heading 1"
// heading1.style.color = "violet";

//     setTimeout(()=>{
//       heading2.textContent = "Heading 2"
//       heading2.style.color = "red";

//         setTimeout(()=>{
//           heading3.textContent = "Heading 3"
//           heading3.style.color = "purple";

//             setTimeout(()=>{
//               heading4.textContent = "Heading 4"
//               heading4.style.color = "blue";
 
//                 setTimeout(()=>{
//                   heading5.textContent = "Heading 5"
//                   heading5.style.color = "green";

//                    setTimeout(()=>{
//                        heading6.textContent = "Heading 6"
//                       heading6.style.color = "brown";

//                        setTimeout(()=>{
//                           heading7.textContent = "Heading 7"
//                           heading7.style.color = "pink";
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

//pyramid of dom

function changeText(element,text,color,time,onSuccessCallback,onFailurecallback){
setTimeout(()=>{
if(element){
element.textContent = text;
element.style.color = color;
if(onSuccessCallback){
onSuccessCallback();
}
}else{
    if(onFailurecallback){
onFailurecallback();
    }
}
},time)

}
changeText(heading1, "Heading 1", "violet", 1000,()=>{
    changeText(heading2,"Heading 2" , "purple" ,1000,()=>{
        changeText(heading3,"Heading 3" , "red" ,1000,()=>{
            changeText(heading4,"Heading 4" , "pink" ,1000,()=>{
                changeText(heading5,"Heading 5" , "green" ,1000,()=>{
                    changeText(heading6,"Heading 6" , "blue" ,1000,()=>{
                        changeText(heading7,"Heading 7" , "brown" ,1000,()=>{

                        },()=>{console.log("Heading 7 does not exit")})
                    },()=>{console.log("Heading 6 does not exit")})
                },()=>{console.log("Heading 5 does not exit")})
            },()=>{console.log("Heading 4 does not exit")})
        },()=>{console.log("Heading 3 does not exit")})
    },()=>{console.log("Heading 2 does  not exit")})
},()=>{console.log("Heading 1 does not exit")})