export const RECEIVE_NEW_FILTER = "RECEIVE_NEW_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";

const removeFilter= filter => {
  return {
    type: REMOVE_FILTER,
    filter
  }
}

export const removeFilters = filter => dispatch => {
  dispatch(removeFilter(filter));
}

const receiveNewFilter = filter => {
  return {
    type: RECEIVE_NEW_FILTER,
    filter
  }
}

export const receiveNewFilters = filter => dispatch => {
  dispatch(receiveNewFilter(filter));
}
