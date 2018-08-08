import * as UserApiUtil from '../../util/session';

export const RECEIVE_CURRENT_USER="RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER="LOGOUT_CURRENT_USER";

const receiveUser= currentUser=> {
  return {
    type:RECEIVE_CURRENT_USER,
    currentUser
  }
}

const logOut =() => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const createUser= newUser => dispatch => {
  return UserApiUtil.postUser(newUser).then(user=>dispatch(receiveUser(user)))
}

export const logInUser = user => dispatch => {
  return UserApiUtil.postSession(user).then(currentUser=>dispatch(receiveUser(currentUser)))
}

export const logOutUser= () => dispatch => {
  return UserApiUtil.deleteSession().then((user)=> dispatch(logOut()))
}
