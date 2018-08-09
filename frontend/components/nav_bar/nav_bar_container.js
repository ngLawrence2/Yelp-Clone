import {connect} from 'react-redux';
import NavBar from './nav_bar';
import {logOutUser,logInUser} from '../../actions/session/session';

const mapStateToProps=  state => {
  console.log(state);
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps= dispatch => {
  return {
    logOutUser: ()=> dispatch(logOutUser()),
    demoLogin: user => dispatch(logInUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
