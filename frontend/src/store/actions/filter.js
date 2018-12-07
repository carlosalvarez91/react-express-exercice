import {SET_FILTER} from './constants';

export const setFilter = (by) => {
    return {
      type: SET_FILTER,
      by
    }
  }