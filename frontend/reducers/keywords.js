import {RECEIVE_ALL_BUSINESSES,RECEIVE_BUSINESS} from '../actions/business/business';

const KeywordReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:

      return action.payload.keywords;
    default:
      return state;
  }
}
export default KeywordReducer;
