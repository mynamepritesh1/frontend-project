const todoForm = document.querySelector(".from-todo");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".from-todo input[type='text']");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();//ye use karne se apna page refresh nhi hoga
    // console.log("event submit");

const newtodo = (todoInput.value); //it print the inpu whatever we enter
const newLi = document.createElement("li");
const newLiInnerHtml = `
<span class="text">${newtodo}</span>
<div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>

</div>`
newLi.innerHTML=newLiInnerHtml;
todoList.append(newLi);

todoInput.value ="";

});
//remove todo
todoList.addEventListener("click", (e)=>{
  if(e.target.classList.contains("remove")){
const targetedLi = e.target.parentNode.parentNode;
targetedLi.remove();

    }
//if we done the the todo then 
    if(e.target.classList.contains("done")){
const liSpan = e.target.parentNode.previousElementSibling;
liSpan.style.textDecoration = "line-through";    
        }
})

