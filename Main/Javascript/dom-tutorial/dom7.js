//documet.createcontent
//append
//prepend
//remove

//create using prepend
// const newTodoItem= document.createElement("li");
// newTodoItem.textContent="Teach Student"
// const todolist = document.querySelector(".todo-list");
// todolist.prepend(newTodoItem);
// console.log(newTodoItem)

//using append
// const newTodoItem= document.createElement("li");
// newTodoItem.textContent="Teach Student"
// const todolist = document.querySelector(".todo-list");
// todolist.append(newTodoItem);
// console.log(newTodoItem)

//remove
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();

//before and after
const newTodoItem= document.createElement("li");
newTodoItem.textContent="Teach Student"
const todolist = document.querySelector(".todo-list");

// todolist.before(newTodoItem);
todolist.after(newTodoItem);





