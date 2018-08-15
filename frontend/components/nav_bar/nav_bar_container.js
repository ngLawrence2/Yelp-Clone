import {connect} from 'react-redux';
import NavBar from './nav_bar';
import {logOutUser,logInUser} from '../../actions/session/session';
import {fetchBusinesses,saveFilter} from '../../actions/business/business';

const mapStateToProps=  state => {
  return {
    currentUser: state.session.currentUser,
    filter: state.entities.filter
  }
}

const mapDispatchToProps= dispatch => {
  return {
    logOutUser: ()=> dispatch(logOutUser()),
    demoLogin: user => dispatch(logInUser(user)),
    fetchBusinesses: (keyword) => dispatch(fetchBusinesses(keyword)),
    saveFilter: (filter) => dispatch(saveFilter(filter))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
