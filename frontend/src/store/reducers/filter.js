import {SET_FILTER} from '../actions/constants'


const initialState = {
    filterBy: ""
  }
  
  const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FILTER:
          return Object.assign({}, state, {filterBy: action.by});
        default:
          return state;
    }
  }

export default filterReducer;
