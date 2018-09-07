import {connect} from 'react-redux';
import {fetchBusinesses,saveFilter,updateLocation,receiveAllBusinesses} from '../../actions/business/business';
import BusinessIndex from './businessIndex';
import {saveLoc} from '../../actions/ui/ui';
import {filterPrice,filterOpen} from '../../reducers/selectors';


const mapStateToProps = (state,ownProps) => {
  // const results = filterPrice(state.entities.businesses, '$');
//  const hoursResults = filterOpen(state.entities.businesses);

  return {
    businesses: state.entities.businesses,
    //filteredBusinesses: results,
    filters: state.entities.filters,
    loc: {
      lat: parseFloat(state.ui.lat),
      lng: parseFloat(state.ui.lng)
      }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: (filter)=> dispatch(fetchBusinesses(filter)),
    updateLocation: (bounds) => dispatch(updateLocation(bounds)),
    saveFilter: (filter)=> dispatch(saveFilter(filter)),
    saveLoc: (loc) => dispatch(saveLoc(loc)),
    filterPrice: (businesses, filterData) => dispatch(receiveAllBusinesses(filterPrice(businesses,filterData))),
    filterHours: (businesses) => dispatch(receiveAllBusinesses(filterOpen(businesses)))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessIndex);
