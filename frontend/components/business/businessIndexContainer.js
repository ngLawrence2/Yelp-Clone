import {connect} from 'react-redux';
import {fetchBusinesses,saveFilter,updateLocation} from '../../actions/business/business';
import BusinessIndex from './businessIndex';
import {saveLoc} from '../../actions/ui/ui';
import {filterResults} from '../../reducers/selectors';


const mapStateToProps = (state,ownProps) => {
  const results = filterResults(state.entities.businesses, "price", '$$');

  return {
    businesses: state.entities.businesses,
    filters: state.entities.filters,
    loc: {
      lat: parseFloat(state.entities.ui.lat),
      lng: parseFloat(state.entities.ui.lng)
      }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: (filter)=> dispatch(fetchBusinesses(filter)),
    updateLocation: (bounds) => dispatch(updateLocation(bounds)),
    saveFilter: (filter)=> dispatch(saveFilter(filter)),
    saveLoc: (loc) => dispatch(saveLoc(loc))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessIndex);
