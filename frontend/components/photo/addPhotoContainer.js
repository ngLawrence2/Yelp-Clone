import {connect} from 'react-redux';
import AddPhoto from './addPhoto';
import {fetchBusiness} from '../../actions/business/business';

const mapStateToProps = (state,ownProps) => {

  return {
      business: state.entities.businesses[ownProps.match.params.business_id],
      filters: state.entities.filters,
      currentUser: state.entities.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchBusiness: id => dispatch(fetchBusiness(id))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPhoto);
