import {connect} from 'react-redux';
import {fetchBusinesses} from '../../actions/business/business';
import BusinessIndex from './businessIndex';
import {filterByPrice} from '../../reducers/selectors';
import {saveFilter} from '../../actions/business/business';

const mapStateToProps = state => {
  return {
    businesses: state.entities.businesses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: (empty)=> dispatch(fetchBusinesses(empty)),
    saveFilter: (filter)=> dispatch(saveFilter(filter))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessIndex);
