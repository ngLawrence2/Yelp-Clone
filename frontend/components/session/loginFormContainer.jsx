import React from 'react';
import {connect} from 'react-redux';
import {logInUser} from '../../actions/session/session';
import SessionForm from './sessionForm';

class LoginForm extends React.Component {

  render() {
      const {formType, formState, action} = this.props;
      return (
        <SessionForm action = {action} formType={formType} formState={formState}/>
      );
  }
}


const mapStateToProps = state => {
  let currentState = {email:'',password:''};
  return {
    formType: 'Login',
    formState: currentState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(logInUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
