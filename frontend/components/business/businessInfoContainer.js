import {connect} from 'react-redux';
import BusinessInfo from './businessInfo';
import {withRouter} from 'react-router';
import {fetchBusiness} from '../../actions/business/business';
const mapStateToProps = (state,ownProps) => {

  return {
    business: state.entities.businesses[ownProps.match.params.business_id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
  }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BusinessInfo));
