import {combineReducers} from 'redux';
import BusinessReducer from './business';

export default combineReducers({
  businesses: BusinessReducer
});
