import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Review from './review';
import {fetchBusiness} from '../../actions/business/business';

const mapStateToProps = (state,ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.business_id]
  }
}

const mapDispatchToProps = dispatch => {
  fetchBusiness: id => dispatch(fetchBusiness(id))
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Review));
