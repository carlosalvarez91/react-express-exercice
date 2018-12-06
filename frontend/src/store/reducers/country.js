import {GET_COUNTRIES} from '../actions/constants'

const countryReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_COUNTRIES:
        return payload
      default:
        return state
    }
}

export default countryReducer;
