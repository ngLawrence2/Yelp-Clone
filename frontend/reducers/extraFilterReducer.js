import {RECEIVE_NEW_FILTER,REMOVE_FILTER} from '../actions/extraFilter/extraFilterAction.js';
import {merge} from 'lodash';

const ExtraFilterReducer = (state={},action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NEW_FILTER:
    let numFilters = Object.keys(state).length+1;
    let filterObject = {
      [action.filter]: numFilters
    };
    return merge({},state,filterObject);
    case REMOVE_FILTER:
    let result = merge({},state);
    let filterToDelete=action.filter;
    delete result[filterToDelete];
    return result;
    default:
      return state;
  }
}

export default ExtraFilterReducer;
