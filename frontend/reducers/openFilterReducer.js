import {RECEIVE_OPEN_FILTER,REMOVE_FILTER} from '../actions/extraFilter/extraFilterAction.js';
import {merge} from 'lodash';

const OpenFilterReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_OPEN_FILTER:
    return {openNow : action.filter};
    case REMOVE_FILTER:
    // let result = merge({},state);
    // delete result[action.filter];
    // return result;
    return {openNow: false};
    default:
      return state;
  }
}

export default OpenFilterReducer;
