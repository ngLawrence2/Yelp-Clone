import {connect} from 'react-redux';
import {fetchBusinesses,saveFilter} from '../../actions/business/business';
import BusinessIndex from './businessIndex';
import {filterResults} from '../../reducers/selectors';


const mapStateToProps = state => {
  return {
    businesses: state.entities.businesses,
    filters: state.entities.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: (filter)=> dispatch(fetchBusinesses(filter)),
    filterResults: (data, filterData, filterValue) => dispatch(filterResults(data,filterData,filterValue)),
    saveFilter: (filter)=> dispatch(saveFilter(filter))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessIndex);
