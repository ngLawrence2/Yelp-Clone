import React from 'react';
import {Link} from 'react-router-dom';


class SearchNavBar extends React.Component {
  constructor(props) {
    super(props);
    let initialFind = this.props.filters.find;
    let initialNear = this.props.filters.near;
    if(this.props.filters.find===undefined) {
      initialFind="";
    }
    if(this.props.filters.near===undefined) {
      initialNear="";
    }
    this.state = {
      find: initialFind,
      near: initialNear
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.getLocation=this.getLocation.bind(this);

  }

  displaySession() {
    if(this.props.currentUser) {
      return ( <Link to = "/login">Log In</Link> );
    } else {
      return (<button onClick={this.props.logOutUser}>LogOut</button>);
    }
  }


  handleUpdate(field) {
      return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getLocation();
  }

  getLocation() {
    let that = this;
    const geocoder = new google.maps.Geocoder;
    geocoder.geocode( { 'address': this.state.near}, (results, status) => {
      if (status == 'OK') {
        const location = {
          lat:results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        };
        that.props.getLatLng(location);
        const search = {
          find:that.state.find,
          near: that.state.near
        };

        that.props.saveFilter(search);
        that.props.fetchBusinesses(search).then((res) => {
          that.props.history.push({
            pathname:"/businesses",
            search: `find=${search.find}&near=${search.near}+lat=${location.lat}+lng=${location.lng}`
          });
        });

      } else {
        const search = {
          find:that.state.find,
          near: that.state.near
        };

        that.props.getLatLng({lat:37.79402839999999,lng:-122.4028156});   //default for San Francisco
        that.props.saveFilter(search);
        that.props.fetchBusinesses(search).then((res) => {
          that.props.history.push({
            pathname:"/businesses",
            search: `find=${search.find}&near=${search.near}+lat=37.79402839999999+lng=-122.4028156`
          });
        });
      }
    });
  }

  render() {
    let photoLink = "/";
    if(this.props.id !== undefined) {
      photoLink = `/business/${this.props.id}/writeReview`;
    }
    return (
      <div className="header">
            <div className="searchBarNav">
              <div className="searchLogo">
                <Link to = "/"><img src = {window.images.logo} /></Link>
              </div>
              <form>
                <div className="searchBar">
                  <span>
                    <span className="catergory">Find</span>
                      <input type="text"
                        onChange={this.handleUpdate('find')} placeholder="burgers, barbers ,spas, handymen..." value={this.state.find}/>
                  </span>
                  <span>
                    <span className="catergory">Near</span>
                  <input type="text" onChange={this.handleUpdate('near')} placeholder="San Francisco" value={this.state.near} />
                  </span>
                <button type="button" onClick={this.handleSubmit}><Link to = "/businesses"><img src = {window.images.search} /></Link></button>
                </div>
            </form>
              <div className="signUpButton">
                <Link to ="/signUp">Sign Up</Link>
              </div>
            </div>
            <div className="quickLinkContainer">
            <div className="headerLinks">
              <div className="links">
                <span><img src = {window.images.restaurant} />Restaurants</span>
                <span><img src = {window.images.nightlife} />NightLife</span>
                <span><img src = {window.images.homeServices} />Home Services</span>
                <span><img src = {window.images.delivery} />Delivery</span>
                <span><Link to ={photoLink} >Write a Review</Link></span>
                <span>Talk</span>
                <span>Events</span>
              </div>
              <div className="LogIn">
              <Link to = "/login">Log In</Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchNavBar;
