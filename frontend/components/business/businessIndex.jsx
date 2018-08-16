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

  componentWillMount() {
    const str = this.props.history.location.search
    const search = {
      near: str.slice(str.indexOf('near=')+5,str.indexOf('+lat')),
      find:str.slice(str.indexOf('=')+1, str.indexOf('&'))
    };
    if (search.near.length===0) {
      search.near = "san francisco";
    }

    const prevLoc = {
      lat: str.slice(str.indexOf('lat=')+4, str.indexOf('+lng')),
      lng:str.slice(str.lastIndexOf("=")+1)
    };


    this.props.saveLoc(prevLoc);
    this.props.saveFilter(search);
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
            <MapBusiness updateResults={this.props.updateLocation} near={this.props.filters.near} find={this.props.filters.find} loc={{lat: this.props.loc.lat, lng:this.props.loc.lng}}/>
          </div>

        </div>

      </div>
    );
  }
}

export default BusinessIndex;
