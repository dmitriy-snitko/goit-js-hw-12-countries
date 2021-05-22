import './sass/main.scss';

import fetchCountries from './js/fetchCountries.js';
import { renderMarckup, resetMarckup } from './js/marckup.js';
import { onError, onTooManyMatches } from './js/notifications.js';
import debounce from 'lodash.debounce';
import refs from './js/refs.js';

refs.searchQuery.addEventListener('input', debounce(onSearch, 700));

function validation(data) {
  if (data.length > 10) {
    return onTooManyMatches();
  };

  return data;
}

function onSearch(e) {
  const query = e.target.value;

  if (!query) {
    resetMarckup();
    return;
  };

  fetchCountries(query)
    .then(validation)
    .then(renderMarckup)
    .catch(onError);
};