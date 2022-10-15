import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import markupOne from './js/templates/markup.hbs';
import markupList from './js/templates/markup-list.hbs';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

var debounce = require('lodash.debounce');
let debounced = debounce(fn, DEBOUNCE_DELAY);

input.addEventListener('input', function (event) {
  debounced(event, event.currentTarget);
});

function fn(event, currentTarget) {
  fetchCountries(`${currentTarget.value.trim()}`).then(data => {
    if (data.length > 1 && data.length <= 10) {
      countryInfo.innerHTML = '';
      countryList.innerHTML = markupList(data.slice(0, 10));
    } else if (data.length < 2) {
      countryList.innerHTML = '';
      countryInfo.innerHTML = markupOne(data);

      console.log(data);
    } else {
      countryInfo.innerHTML = '';
      countryList.innerHTML = '';
    }
  });
}
