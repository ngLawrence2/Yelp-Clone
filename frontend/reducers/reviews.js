import {RECEIVE_ALL_BUSINESSES,RECEIVE_BUSINESS} from '../actions/business/business';

const ReviewReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
    case RECEIVE_BUSINESS:
      return action.payload.reviews
    default:
      return state;
  }
}

export default ReviewReducer;
