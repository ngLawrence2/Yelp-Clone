import {RECEIVE_BUSINESSES,RECEIVE_BUSINESS} from '../actions/business/business';

const BusinessReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return action.business;
    default:
      return state;
  }
}

export default BusinessReducer;
