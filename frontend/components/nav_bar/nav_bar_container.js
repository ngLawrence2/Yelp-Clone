import {connect} from 'react-redux';
import NavBar from './nav_bar';
import {logOutUser,logInUser} from '../../actions/session/session';
import {fetchBusinesses} from '../../actions/business/business';

const mapStateToProps=  state => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps= dispatch => {
  return {
    logOutUser: ()=> dispatch(logOutUser()),
    demoLogin: user => dispatch(logInUser(user)),
    fetchBusinesses: (keyword) => dispatch(fetchBusinesses(keyword))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
