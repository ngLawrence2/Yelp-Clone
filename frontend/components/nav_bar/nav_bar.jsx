import React from 'react';
import {Link} from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayLogOut=this.displayLogOut.bind(this);
    this.demo=this.demo.bind(this);
    this.navBar=this.navBar.bind(this);
    this.state = {
      find: '',
      near: ''
    };
    this.search=this.search.bind(this);
    this.getLocation=this.getLocation.bind(this);
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
        that.props.fetchBusinesses(search).then((res) => {
          that.props.history.push({
            pathname:"/businesses",
            search: `find=${search.find}&near=${search.near}+lat=37.79402839999999+lng=-122.4028156`
          });
        });
      }
    });
  }



  handleUpdate(field) {
      return e => this.setState({[field]:e.target.value})
  }

  demo() {
    let demoUser = {
      email:'DemoUser@demo.com',
      password:'demouser'
    }
    this.props.demoLogin(demoUser);
  }

  displayLogOut() {
    const {currentUser,logOutUser}=this.props
    if(currentUser) {
     return (
       <span className = "userStatus">
         <h2>
             {currentUser.fname} {currentUser.lname} </h2>
           <h2><button onClick={logOutUser}>LogOut</button></h2>
       </span>
     );
   } else {
     return (
       <span className = "userStatus">
         <h2><Link to = "/login">Log In</Link> </h2>
         <h2><Link to= "/" onClick={this.demo}>Demo Login</Link></h2>
         <h2><Link className = "signUp" to= "/signUp">Sign Up</Link></h2>
       </span>
     );
   }
  }

  search(e) {
    e.preventDefault();
    this.getLocation();
  }



  navBar() {
    return (
      <div>
        <div className="navBar">
          <div className="allLinks">
            <h2>Write a Reiview</h2>
            <h2>Events</h2>
            <h2>Talk</h2>
          </div>

          <div className= "sessionLinks">
            {this.displayLogOut()}
          </div>

        </div>


        <div className="logoImage">
          <img src = {window.images.logo} />
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
        <button onClick={this.search}><img src = {window.images.search} /></button>
        </div>
    </form>
        <div className="quickLinks">
          <Link to = "#"><img src = {window.images.restaurant} />Restaurants</Link>
          <Link to ="#"><img src = {window.images.nightlife} />NightLife</Link>
          <Link to ="#"><img src = {window.images.homeServices} />Home Services</Link>
          <Link to ="#"><img src = {window.images.delivery} />Delivery</Link>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.navBar()}
      </div>
    );
  }
}


export default NavBar;
