import bulker from 'bulker';

/**
 * Adds new todo element with provideed title
 * and a done button.
 */
function addTodo(title) {
  const list = document.querySelector('.todos');

  const todoElement = document.createElement('li');
  const titleElement = document.createElement('span');
  const doneButtonElement = document.createElement('button');

  titleElement.textContent = title;
  doneButtonElement.textContent = 'done';
  todoElement.classList.add('todo');

  todoElement.appendChild(titleElement);
  todoElement.appendChild(doneButtonElement);
  list.appendChild(todoElement);
}

/**
 * Removes a todo from DOM.
 */
function removeTodo(todo) {
  todo.parentNode.removeChild(todo);
}

// query todo elements
const todos = bulker('.todo');

// add click listener on all todos (both present and future-added)
todos.call('addEventListener', 'click', event => {
  // if click is on a done button, remove todo
  if (event.target.matches('button')) {
    removeTodo(event.target.parentNode);
  }
});

// query form element
const form = bulker('form');

// submit new todo
form.call('addEventListener', 'submit', event => {
  event.preventDefault();

  const formElement = event.target;

  addTodo(formElement.title.value);

  formElement.reset();
});
