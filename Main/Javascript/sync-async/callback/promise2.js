const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changeText(element,text,color,time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(element){
            element.textContent = text;
            element.style.color = color;
            resolve();
            }else{
            reject();
            }
            },time)
            
    })

}

changeText(heading1, "Heading 1" , "red" , 1000)
.then(()=> changeText(heading2, "Heading 2" , "purple" , 1000))
.then(()=> changeText(heading3, "Heading 3" , "blue" , 1000))
.then(()=> changeText(heading4, "Heading 4" , "pink" , 1000))
.then(()=> changeText(heading5, "Heading 5" , "violet" , 1000))
.then(()=> changeText(heading6, "Heading 6" , "aqua" , 1000))
.then(()=> changeText(heading7, "Heading 7" , "green" , 1000))
.catch((error)=>{
    alert(error)
})
