import {GET_COUNTRIES} from './constants';

export const getCountries = () => dispatch => {
  return fetch('http://localhost:5000/api/country')
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(countries => {
        console.log(countries)
        dispatch({type: GET_COUNTRIES, payload: countries})})
}
