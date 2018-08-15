import {connect} from 'react-redux';
import {fetchBusinesses,saveFilter} from '../../actions/business/business';
import BusinessIndex from './businessIndex';
import {filterByPrice} from '../../reducers/selectors';


const mapStateToProps = state => {
  return {
    businesses: state.entities.businesses,
    filters: state.entities.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: (empty)=> dispatch(fetchBusinesses(empty)),
    saveFilter: (filter)=> dispatch(saveFilter(filter))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessIndex);
