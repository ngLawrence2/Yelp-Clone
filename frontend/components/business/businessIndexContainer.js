import {connect} from 'react-redux';
import {fetchBusinesses,saveFilter,updateLocation} from '../../actions/business/business';
import BusinessIndex from './businessIndex';
import {filterResults} from '../../reducers/selectors';


const mapStateToProps = (state,ownProps) => {
  return {
    businesses: state.entities.businesses,
    filters: state.entities.filters,
    loc: {
      lat: state.entities.ui.lat,
      lng: state.entities.ui.lng
      }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: (filter)=> dispatch(fetchBusinesses(filter)),
    updateLocation: (bounds) => dispatch(updateLocation(bounds)),
    saveFilter: (filter)=> dispatch(saveFilter(filter))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessIndex);
