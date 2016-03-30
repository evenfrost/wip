import bulker from 'bulker';

const create = document.createElement.bind(document);
const list = document.querySelector('ul');

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => console.log(mutation));
});

observer.observe(document.body);

list.appendChild(create('li'));
list.appendChild(create('li'));
list.appendChild(create('li'));

