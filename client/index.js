import bulker from 'bulker';

const create = document.createElement.bind(document);
const list = document.querySelector('ul');
const items = bulker('li');

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    Array.from(mutation.addedNodes)
      .forEach(node => {
        console.log(node);
        console.log(node.matches && node.matches(items._selectors[0]));
      });
  });
});

console.log('items', items);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

list.appendChild(create('li'));
list.appendChild(create('li'));
list.appendChild(create('li'));
