import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar';
import FilterBar from '../filter/FilterBar';
import SearchItem from './searchItem';
import BusinessContainer from './businessContainer';
import MapBusiness from './map';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchFilters=this.getSearchFilters.bind(this);
  }

  componentDidMount() {
    const search = {
      near:'',
      find:''
    };
    this.props.fetchBusinesses(search);
  }

  getSearchFilters(find,near) {
    this.props.saveFilter(find,near);
  }

  componentWillUnmount() {

  }

  render() {
    if(!this.props.businesses) {
      return null;
    }

    const displayAllBusiness = Object.keys(this.props.businesses).map(businessId => {
      return (
        <div key = {businessId}>
          <SearchItem business = {this.props.businesses[businessId]} />
        </div>
      );
    });

    return (
      <div>
        <div>
          <SearchNavBar saveFilter = {this.getSearchFilters} />
        </div>

        <div className="filterBar">
          <FilterBar filter={this.props.fetchBusinesses} />
        </div>

        <div className="businessResults">

          <div className="searchRes">
            {displayAllBusiness}
          </div>

          <div className="mapRes">
            <div className="map" ref="map"/>
          </div>

        </div>

      </div>
    );
  }
}

export default BusinessIndex;
