import bulker from 'bulker';

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    Array.from(mutation.addedNodes)
      .forEach(node => {
        // console.log(node);
        // console.log(node.matches && node.matches(items.selectors[0]));
      });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

function createTodo(title) {
  const list = document.querySelector('.todos');
  const todo = document.createElement('li');
  todo.textContent = title;
  todo.classList.add('todo');

  list.appendChild(todo);
}

const todos = bulker('.todo');
const form = bulker('form');

todos.call('addEventListener', 'click', event => {
  event.target.parentNode.removeChild(event.target);
});

form.call('addEventListener', 'submit', event => {
  const form = event.target;

  event.preventDefault();
  createTodo(form.title.value);

  form.reset();
});


// list.appendChild(create('li'));
// list.appendChild(create('li'));
// list.appendChild(create('li'));
