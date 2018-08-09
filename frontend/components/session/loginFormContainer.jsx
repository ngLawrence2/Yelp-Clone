import React from 'react';
import {connect} from 'react-redux';
import {logInUser,clearErrors} from '../../actions/session/session';
import SessionForm from './sessionForm';



const mapStateToProps = state => {
  let currentState = {email:'',password:''};
  return {
    formType: 'Login',
    formState: currentState,
    errors: state.error.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(logInUser(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: user => dispatch(logInUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
