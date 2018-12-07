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
export const getCountriesMatch = () => dispatch => {
    return fetch('http://localhost:5000/api/countries-match')
      .then(res => {
          console.log(res)
          return res.json()
      })
      .then(countries => {
          console.log(countries)
          dispatch({type: GET_COUNTRIES, payload: countries})})
  }
  
export const getCountriesList = () => dispatch => {
    return fetch('http://localhost:5000/api/countries')
      .then(res => {
          console.log(res)
          return res.json()
      })
      .then(countries => {
          console.log(countries)
          dispatch({type: GET_COUNTRIES, payload: countries})})
  }
