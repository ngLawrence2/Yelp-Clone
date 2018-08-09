import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS,CLEAR_ERRORS} from '../actions/session/session';

const sessionErrorReducer = (state=[],action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default sessionErrorReducer;
