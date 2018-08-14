import * as BusinessApiUtil from '../../util/business';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";


export const receiveAllBusinesses = businesses => {
  return {
      type:RECEIVE_ALL_BUSINESSES,
      businesses
  }
}

export const receiveBusiness = payload => {

  return {
    type:RECEIVE_BUSINESS,
    payload
  }
}

export const fetchBusinesses = (keyword) => dispatch => {
 return BusinessApiUtil.fetchAllBusinesses(keyword).then(businesses=>dispatch(receiveAllBusinesses(businesses)))
}

export const fetchBusiness = id => dispatch => {
  return BusinessApiUtil.fetchBusiness(id).then(payload => dispatch(receiveBusiness(payload)))
}
