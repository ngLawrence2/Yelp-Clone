import {fetchBusinesses} from './business';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilter = (filter,value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter,value));
  return fetchBusinesses(getState())(dispatch);
}
