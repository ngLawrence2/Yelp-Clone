import {connect} from 'react-redux';
import {fetchBusinesses} from '../../actions/business/business';
import BusinessIndex from './businessIndex';

const mapStateToProps = state => {
  return {
    businesses: state.entities.businesses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllBusinesses: ()=> dispatch(fetchBusinesses())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessIndex);
