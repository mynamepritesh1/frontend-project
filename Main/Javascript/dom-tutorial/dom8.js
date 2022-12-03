//ele.insertAdjacent(where,hrtml)
//beforebegin
//afterbegin
//beforeend
//afterend

//clone nodes

const ul = document.querySelector(".todo-list");
const li= document.createElement("li");

li.textContent= "newTodo";
const li2 = li.cloneNode(true);


ul.append(li);
ul.prepend(li2);
