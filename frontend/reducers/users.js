import {RECEIVE_BUSINESS,RECEIVE_ALL_BUSINESSES} from '../actions/business/business';

const UserReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
    case RECEIVE_BUSINESS:
      return action.payload.users;
    default:
      return state;
  }
}

export default UserReducer;
