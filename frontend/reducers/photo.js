import {RECEIVE_BUSINESS} from '../actions/business/business';

const PhotoReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      if(!action.payload.photos) {
        return {};
      }
      return action.payload.photos;
    default:
      return state;
  }
}

export default PhotoReducer;
