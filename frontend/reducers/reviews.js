import {RECEIVE_ALL_BUSINESSES,RECEIVE_BUSINESS} from '../actions/business/business';

const ReviewReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_BUSINESS:
    if(!action.payload.reviews) {
      return {};
    }
      return action.payload.reviews
    default:
      return state;
  }
}

export default ReviewReducer;
