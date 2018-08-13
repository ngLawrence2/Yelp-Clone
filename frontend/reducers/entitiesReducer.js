import {combineReducers} from 'redux';
import BusinessReducer from './business';
import PhotoReducer from './photo';
import ReviewReducer from './reviews';
import UserReducer from './users';
import KeywordReducer from './keywords';

export default combineReducers({
  businesses: BusinessReducer,
  photos: PhotoReducer,
  reviews: ReviewReducer,
  keywords: KeywordReducer,
  users: UserReducer
});
