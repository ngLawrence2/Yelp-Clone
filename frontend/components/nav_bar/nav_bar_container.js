import {connect} from 'react-redux';
import NavBar from './nav_bar';
import {logOutUser} from '../../actions/session/session';

const mapStateToProps=  state => {
  console.log(state);
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps= dispatch => {
  return {
    logOutUser: ()=> dispatch(logOutUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
