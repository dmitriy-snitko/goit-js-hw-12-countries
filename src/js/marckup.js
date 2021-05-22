import articleTpl from '../templates/article.hbs';
import listTpl from '../templates/list.hbs';
import refs from '../js/refs.js'

export function renderMarckup(data) {

  if (data.length > 1 && data.length < 10) {
    refs.container.innerHTML = listTpl(data);
    onCountryClick(data);
  };

  if (data.length === 1) {
    const [country] = data;
    refs.container.innerHTML = articleTpl(country);
  };
};

export function resetMarckup() {
  refs.container.innerHTML = '';
};

function onCountryClick(data) {
  const ul = document.querySelector('ul');
  
  ul.addEventListener('click', e => {
    refs.searchQuery.value = '';

    const index = e.target.dataset.index;
    refs.container.innerHTML = articleTpl(data[index]);
  });
}
