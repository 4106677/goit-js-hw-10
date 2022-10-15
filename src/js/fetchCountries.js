// let name = '';
import Notiflix from 'notiflix';

let arr = [];

/*
export function fetchCountries(country) {
  return fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(counties => {
      if (counties.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      console.log(counties);
    })
    .catch(error => {
      console.log(error);
    });
}
*/

export function fetchCountries(country) {
  return fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
      return response.json();
    })
    .then(counties => {
      if (counties.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }

      // console.log(counties);
      return counties;
    })

    .catch(error => {
      console.log(error);
    });
}
