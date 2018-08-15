import {connect} from 'react-redux';
import SearchNavBar from './search_nav_bar';
import { withRouter } from 'react-router';
import {saveFilter,fetchBusinesses} from '../../actions/business/business';

const mapStateToProps = (state,ownProps) => {
  return {
    filters: state.entities.filters,
    id: ownProps.match.params.business_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: (filter) => dispatch(fetchBusinesses(filter)),
    saveFilter: (filter) => dispatch(saveFilter(filter))
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchNavBar));
