//here we are giving queryselector ('.todo-form')  //as it is class  ||  if id then ('#todo-form')
//Selectors
let todoinp = document.querySelector ('.task');
let todobtn = document.querySelector ('.submit');
let todolst = document.querySelector ('.list');

//Event linsners
todobtn.addEventListener ('click', addTodo);
todolst.addEventListener ('click', deleteCheck);
//Functions
function addTodo (event) {
  //Prevent form from submitting
  event.preventDefault ();

  //Todo Div
  const todoDiv = document.createElement ('div');
  todoDiv.classList.add ('todo');

  // deletee button
  const trashbutton = document.createElement ('button');
  trashbutton.innerHTML = '<i class ="fas fa-window-close"></i>';
  trashbutton.classList.add ('trash-btn');
  todoDiv.appendChild (trashbutton);

  //check button
  const compbutton = document.createElement ('button');
  compbutton.innerHTML = '<i class ="fas fa-check"></i>';
  compbutton.classList.add ('complete-btn');
  todoDiv.appendChild (compbutton);
  console.log (compbutton.innerHTML);

  //Create LI
  const newTodo = document.createElement ('li');
  newTodo.innerText = todoinp.value;
  newTodo.classList.add ('task');
  todoDiv.appendChild (newTodo);
  //append to list
  todolst.appendChild (todoDiv);
  //clear input value
  todoinp.value = '';
}

function deleteCheck (e) {
  //e.target will point on wich we are clicking
  const item = e.target;
  //console.log()
  const pitem = item.parentElement;
  console.log (pitem.classList[0]);
  if (pitem.classList[0] === 'trash-btn') {
    const todo = pitem.parentElement;
    todo.remove ();
  }
  //check
  if (pitem.classList[0] === 'complete-btn') {
    const todo = pitem.parentElement;
    todo.classList.toggle ('completed');
  }
}
