import * as ReviewApiUtil from '../../util/review';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

const updateReview = review => {
  return {
    type: UPDATE_REVIEW,
    review
  }
}

export const createReview = review => dispatch => {
  return ReviewApiUtil.createReview(review).then(review=>dispatch(receiveReview(review)));
}

export const reviewUpdate = review => dispatch => {
  return ReviewApiUtil.updateReview(review).then(review=>dispatch(updateReview(review)));
}
