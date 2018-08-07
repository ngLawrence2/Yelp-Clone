import {connect} from 'react-redux';
import {createUser} from '../../actions/session/session';
import SignUp from './signUp';


const mapDispatchToProps = dispatch => {
  return {
    createUser: user => dispatch(createUser(user))
  }
}

export default connect(null,mapDispatchToProps)(SignUp);
