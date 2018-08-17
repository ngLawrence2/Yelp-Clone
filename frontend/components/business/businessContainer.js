import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Business from './business';
import {fetchBusiness} from '../../actions/business/business';

const mapStateToProps = (state,ownProps) => {

  return {
    business: state.entities.businesses[ownProps.match.params.business_id],
    photos: state.entities.photos,
    keywords: state.entities.keywords,
    filters: state.entities.filters,
    reviews: state.entities.reviews,
    users: state.entities.users,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: id => dispatch(fetchBusiness(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Business);
