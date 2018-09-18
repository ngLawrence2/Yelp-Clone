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
  this.changeFilterColor=this.changeFilterColor.bind(this);
  this.filterOpen=this.filterOpen.bind(this);
  this.isOpen=this.isOpen.bind(this);
  }


    isOpen(currentBusiness) {
      let currentDay = new Date().getDay();
      let hours = currentBusiness.hours[currentDay];
      if (hours === "Closed") {
        return false;
      }
      let openTime = hours.slice(0,hours.indexOf('-'));
      let closeTime=hours.slice(hours.indexOf('-')+1);
      let currentHours = new Date().getHours();

        //we are on the pm in current time
      if(currentHours > 12) {
        if(closeTime.indexOf('pm')!==-1) {
          let closedHours = closeTime.slice(0,closeTime.indexOf(':'));
          if((currentHours-12) < closedHours) {
            return true;
          }
        }
        //closing hours are in the AM
        if(closeTime.indexOf('pm')=== -1) {
            let closedHours = closeTime.slice(0,closeTime.indexOf(':'));
            let openHours = openTime.slice(0, openTime.indexOf(":"));
            // 7am - 11am only open in the morning
            if(openHours < closedHours) {
              return false;
            } else {
              // 7am - 1am open throughout the day
              return true;
            }
        }
      }

      if (currentHours <= 12) {
        
      }


      return false;
    }


  filterOpen(val) {
    if(this.props.openFilter.openNow) {
      return this.props.removeFilters();
    }else {
      return this.props.receiveOpenFilters(val);
    }
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

    //we have no filters
    if (Object.keys(this.props.extraFilters).length === 0 && (Object.keys(this.props.openFilter).length===0 || this.props.openFilter.openNow===false)) {
      return Object.keys(this.props.businesses).map( obj => this.props.businesses[obj]);
    }

    //we filter things open
    if(Object.keys(this.props.extraFilters).length=== 0 && this.props.openFilter.openNow) {
      for(let i = 0 ; i < Object.keys(this.props.businesses).length; i++) {
        let currentKey = Object.keys(this.props.businesses)[i];
        let currentBusiness = this.props.businesses[currentKey];
          if(this.isOpen(currentBusiness)) {
            result.push(currentBusiness);
          }
      }
      return result;
    }

    //we filter everything by price only
    if(Object.keys(this.props.extraFilters).length !== 0 && (Object.keys(this.props.openFilter).length===0 || this.props.openFilter.openNow===false)) {
      for(let i = 0 ; i < Object.keys(this.props.businesses).length; i++) {
        let currentKey = Object.keys(this.props.businesses)[i];
        let currentBusiness = this.props.businesses[currentKey];
          if(this.props.extraFilters[currentBusiness.price]) {
            result.push(currentBusiness);
          }
      }
      return result;
    }

    //we filter by price and open
    if(Object.keys(this.props.extraFilters).length !== 0 && this.props.openFilter.openNow) {
      for(let i = 0 ; i < Object.keys(this.props.businesses).length; i++) {
        let currentKey = Object.keys(this.props.businesses)[i];
        let currentBusiness = this.props.businesses[currentKey];
          if(this.props.extraFilters[currentBusiness.price] && this.isOpen(currentBusiness)) {
            result.push(currentBusiness);
          }
      }
      return result;
    }

  }



  changeFilterColor(val) {

    return this.props.extraFilters[val];
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
              <button className ={ this.props.extraFilters["$"] ? "filterOn" : "filter" } onClick={e=>this.filterController("$")}>$</button>
              <button className ={ this.props.extraFilters["$$"] ? "filterOn" : "filter" } onClick={e=>this.filterController("$$")}>$$</button>
              <button className ={ this.props.extraFilters["$$$"] ? "filterOn" : "filter" } onClick={e=>this.filterController("$$$")}>$$$</button>
              <button  className ={ this.props.extraFilters["$$$$"] ? "filterOn" : "filter" } onClick={e=>this.filterController("$$$$")}>$$$$</button>
            </div>
            <div className="OpenFilter">
              <button className= {this.props.openFilter.openNow === true ? "filterOn" : "filter"} onClick={e=>this.filterOpen(true)}>Open Now</button>
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
