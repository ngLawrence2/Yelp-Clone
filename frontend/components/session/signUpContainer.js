import {connect} from 'react-redux';
import {createUser} from '../../actions/session/session';
import SessionForm from './sessionForm';

const mapStateToProps = state => {
  let currentState = {
    email:'',
    fname:'',
    lname:'',
    password:'',
    birthday: null,
    zipCode: ''
  };
  return {
    formType: "signUp",
    formState: currentState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(createUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
