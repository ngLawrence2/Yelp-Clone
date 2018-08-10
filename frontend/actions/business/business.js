import * as BusinessApiUtil from '../../util/business';
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

const receiveBusinesses = businesses => {
  return {
      type:RECEIVE_BUSINESSES,
      businesses
  }
}

const receiveBusiness = business => {
  return {
    type:RECEIVE_BUSINESS,
    business
  }
}

export const fetchBusinesses = () => dispatch => {
  return BusinessApiUtil.fetchBusinesses().then(businesses => dispatch(receiveBusinesses(businesses)));
}

export const fetchBusiness = id => dispatch => {
  return BusinessApiUtil.fetchBusiness(id).then(business => dispatch(receiveBusiness(business)))
}
