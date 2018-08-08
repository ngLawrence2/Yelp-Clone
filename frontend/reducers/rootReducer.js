import {combineReducers} from 'redux';
import sessionReducer from './session';
import errorsReducer from './errorsReducer';
export default combineReducers({
  session: sessionReducer,
  error: errorsReducer
});
