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
    this.state = {
      filter:false
    };
    this.filterController = this.filterController.bind(this);
  this.filterBusinesses=this.filterBusinesses.bind(this);
  }

  filterController(val) {
    if(this.props.extraFilters[val]) {
      return this.props.removeFilters(val);
    } else {
      return this.props.receiveNewFilters(val);
    }
  }

  filterBusinesses() {

    let result = [];
    if (Object.keys(this.props.extraFilters).length === 0) {


      return Object.keys(this.props.businesses).map( obj => this.props.businesses[obj]);
    }

  //  let moneyFilters = Object.keys(this.props.extraFilters);

    for(let i = 0 ; i < Object.keys(this.props.businesses).length; i++) {
      let currentKey = Object.keys(this.props.businesses)[i];
      let currentBusiness = this.props.businesses[currentKey];
        if(this.props.extraFilters[currentBusiness.price]) {

          result.push(currentBusiness);
        }
    }

    return result;
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

    const bus = this.filterBusinesses();

    const displayAllBusiness = bus.map(business => {
      return (
          <SearchItem key={business.id} business = {this.props.businesses[business.id]} />
      );
    });



    return (
      <div>
        <div>
          <SearchNavBarContainer find={this.props.filters.find} near={this.props.filters.near}  />
        </div>

        <div className="filterBar">
          <div className="filterBar">
            <div className="filterButtonContainer">
            <div className="PriceFilter">
              <button onClick={e=>this.filterController("$")}>$</button>
              <button onClick={e=>this.filterController("$$")}>$$</button>
              <button onClick={e=>this.filterController("$$$")}>$$$</button>
              <button onClick={e=>this.filterController("$$$$")}>$$$$</button>
            </div>
            <div className="OpenFilter">
              <button onClick={e=>alert('not implemented yet')}>Open Now</button>
            </div>
            </div>
          </div>
        </div>
        <div className="businessResults">
          <div className="searchRes">
            {displayAllBusiness}
          </div>
          <div className="mapRes">
            <MapBusiness updateResults={this.props.updateLocation} businesses={bus} near={this.props.filters.near} find={this.props.filters.find} loc={{lat: this.props.loc.lat, lng:this.props.loc.lng}}/>
          </div>

        </div>

      </div>
    );
  }
}

export default BusinessIndex;
