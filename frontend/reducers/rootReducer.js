import {combineReducers} from 'redux';
import sessionReducer from './session';
import errorsReducer from './errorsReducer';
import entitiesReducer from './entitiesReducer';
import UIReducer from './uireducer';

export default combineReducers({
  session: sessionReducer,
  error: errorsReducer,
  entities: entitiesReducer,
  ui: UIReducer
});
