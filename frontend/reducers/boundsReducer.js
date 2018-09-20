import {SAVE_BOUNDS} from '../actions/bounds/bounds.js';

const BoundsReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case SAVE_BOUNDS:
      return action.bounds;
    default:
      return state;
  }
}
export default BoundsReducer;
