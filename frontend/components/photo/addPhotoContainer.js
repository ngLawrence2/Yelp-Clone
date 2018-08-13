import {connect} from 'react-redux';
import AddPhoto from './addPhoto';
import {fetchBusiness} from '../../actions/business/business';

const mapStateToProps = (state,ownProps) => {

  return {
      business: state.entities.businesses[ownProps.match.params.business_id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchBusiness: id => dispatch(fetchBusiness(id))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPhoto);
