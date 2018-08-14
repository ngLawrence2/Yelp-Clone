import {SAVE_FILTER} from '../actions/business/business';
const FilterReducer = (state={},action) =>{
  Object.freeze(state);
  switch (action.type) {
    case SAVE_FILTER:
      return action.filter;
    default:
      return state;
  }
}
export default FilterReducer;
