import {RECEIVE_BUSINESS,RECEIVE_ALL_BUSINESSES} from '../actions/business/business';

const UserReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      if(!action.payload.users) {
        return {};
      }
      return action.payload.users;
    default:
      return state;
  }
}

export default UserReducer;
