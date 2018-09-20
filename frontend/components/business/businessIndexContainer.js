import {connect} from 'react-redux';
import {fetchBusinesses,saveFilter,updateLocation,receiveAllBusinesses} from '../../actions/business/business';
import BusinessIndex from './businessIndex';
import {saveLoc} from '../../actions/ui/ui';
import {receiveNewFilters,removeFilters, receiveOpenFilters} from '../../actions/extraFilter/extraFilterAction';
import {saveBoundsToStore} from '../../actions/bounds/bounds';

const mapStateToProps = (state,ownProps) => {
  return {
    businesses: state.entities.businesses,
    extraFilters: state.entities.extraFilter,
    filters: state.entities.filters,
    openFilter: state.entities.openFilter,
    loc: {
      lat: parseFloat(state.ui.lat),
      lng: parseFloat(state.ui.lng)
    },
    bounds: state.bounds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: (filter)=> dispatch(fetchBusinesses(filter)),
    updateLocation: (bounds) => dispatch(updateLocation(bounds)),
    saveFilter: (filter)=> dispatch(saveFilter(filter)),
    saveLoc: (loc) => dispatch(saveLoc(loc)),
    receiveNewFilters: (newFilter) => dispatch(receiveNewFilters(newFilter)),
    removeFilters: (filter) => dispatch(removeFilters(filter)),
    receiveOpenFilters: (filter) => dispatch(receiveOpenFilters(filter)),
    saveBoundsToStore: (bounds) => dispatch(saveBoundsToStore(bounds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessIndex);
