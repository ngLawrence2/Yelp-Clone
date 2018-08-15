import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar';
import FilterBar from '../filter/FilterBar';
import SearchItem from './searchItem';
import BusinessContainer from './businessContainer';
import MapBusiness from './map';
import SearchNavBarContainer from '../nav_bar/search_nav_bar_container';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const search = {
      near:this.props.filters.near,
      find:this.props.filters.find
    };
    this.props.fetchBusinesses(search);
  }



  render() {
    if(!this.props.businesses) {
      return null;
    }
    const displayAllBusiness = Object.keys(this.props.businesses).map(businessId => {
      return (

          <SearchItem key={businessId} business = {this.props.businesses[businessId]} />

      );
    });

    return (
      <div>
        <div>
          <SearchNavBarContainer find={this.props.filters.find} near={this.props.filters.near}  />
        </div>

        <div className="filterBar">
          <FilterBar filter={this.props.fetchBusinesses} />
        </div>

        <div className="businessResults">

          <div className="searchRes">
            {displayAllBusiness}
          </div>

          <div className="mapRes">
            <MapBusiness loc={{lat: 37.784558, lng: -122.398564}}/>
          </div>

        </div>

      </div>
    );
  }
}

export default BusinessIndex;
