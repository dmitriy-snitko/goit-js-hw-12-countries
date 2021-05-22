import { BASE_URL } from './constants.js';

export default function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      };

      throw new Error();
    });
};