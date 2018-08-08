import {combineReducers} from 'redux';
import sessionErrorReducer from './sessionErrorReducer';

const errorsReducer = combineReducers({
  session: sessionErrorReducer
});
export default errorsReducer;
