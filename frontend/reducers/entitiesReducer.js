import {combineReducers} from 'redux';
import BusinessReducer from './business';
import PhotoReducer from './photo';
import ReviewReducer from './reviews';
import UserReducer from './users';

export default combineReducers({
  businesses: BusinessReducer,
  photos: PhotoReducer,
  reviews: ReviewReducer,
  users: UserReducer
});
