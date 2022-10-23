const todoForm = document.querySelector('.todo-form');
// select the input box
const todoInput = document.querySelector('.todo-input');
// select the <ul> with class="todo-items"
const todoItemsList = document.querySelector('.todo-items');

// array to store todos
let todos = [];

const result = todos.filter(checkTodos);
function checkTodos(todos) {
    return todos == completed;
}

// add event listener
todoForm.addEventListener('submit', function(event) {
  
  event.preventDefault();
  addTodo(todoInput.value); 
});

// function to add todo
function addTodo(item) {
  if (item !== '') {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };

    todos.push(todo);
    addToLocalStorage(todos); 

    todoInput.value = '';
  }
}

// function to render todos to screen
function renderTodos(todos) {
   todoItemsList.innerHTML = '';

  // forEach loop check if completed
  todos.forEach(function(item) {
    const checked = item.completed ? 'checked': null;

    // fill in li
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
        
        /*  <input type="checkbox" class="checkbox">
          Go to Gym
          <button class="delete-button">X</button>
        </li> */
    // if item is completed add line-through
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    todoItemsList.append(li);
  });

}

// function add todos to local storage
function addToLocalStorage(todos) {
  // conver the array to string then store it.
  localStorage.setItem('todos', JSON.stringify(todos));
  // render them to screen
  renderTodos(todos);
}

// function from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// toggle completed and not completed
function toggle(id) {
  todos.forEach(function(item) {
    if (item.id == id) {
      // toggle the value
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

// deletes a todo from todos array
function deleteTodo(id) {
   todos = todos.filter(function(item) {
      return item.id != id;
  });

  // update localStorage
  addToLocalStorage(todos);
}

// get everything from localStorage
getFromLocalStorage();

// add event listener
todoItemsList.addEventListener('click', function(event) {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  // check delete-button
  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});
