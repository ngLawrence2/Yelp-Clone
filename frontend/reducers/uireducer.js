import {RECEIVE_LOC,SAVE_LOC} from '../actions/ui/ui';
const UIReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case SAVE_LOC:
    case RECEIVE_LOC:
      return action.loc;
    default:
      return state;
  }
}

export default UIReducer;
