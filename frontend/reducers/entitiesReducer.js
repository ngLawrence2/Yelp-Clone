import {combineReducers} from 'redux';
import BusinessReducer from './business';
import PhotoReducer from './photo';
import ReviewReducer from './reviews';
import UserReducer from './users';
import KeywordReducer from './keywords';
import FilterReducer from './filter';
import UIReducer from './uireducer';

export default combineReducers({
  businesses: BusinessReducer,
  photos: PhotoReducer,
  reviews: ReviewReducer,
  keywords: KeywordReducer,
  users: UserReducer,
  filters: FilterReducer
//  ui: UIReducer
});
