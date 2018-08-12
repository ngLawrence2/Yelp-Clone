import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Business from './business';
import {fetchBusiness} from '../../actions/business/business';

const mapStateToProps = (state,ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.business_id],
    photos: state.entities.photos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: id => dispatch(fetchBusiness(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Business);
