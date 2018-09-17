import {RECEIVE_ALL_BUSINESSES,RECEIVE_BUSINESS} from '../actions/business/business';
import {FILTER_PRICE,FILTER_HOURS} from '../actions/business/filterActions';
const BusinessReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case FILTER_PRICE:
    case FILTER_HOURS:
    case RECEIVE_ALL_BUSINESSES:
      
      return action.businesses;
    case RECEIVE_BUSINESS:
      return action.payload.business;
    default:
      return state;
  }
}

export default BusinessReducer;
