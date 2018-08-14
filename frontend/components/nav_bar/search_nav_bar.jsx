import React from 'react';
import {Link} from 'react-router-dom';

class SearchNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: '',
      near:''
    };
  }

  displaySession() {
    if(this.props.currentUser) {
      return ( <Link to = "/login">Log In</Link> );
    } else {
      return (<button onClick={this.props.logOutUser}>LogOut</button>);
    }
  }

  render() {

    return (
      <div className="header">
            <div className="searchBarNav">
              <div className="searchLogo">
                <Link to = "/"><img src = {window.images.logo} /></Link>
              </div>

              <div className="searchBar">
                <span>
                  <span className="catergory">Find</span>
                  <input type="text" placeholder="burgers, barbers ,spas, handymen..."/>
                </span>
                <span>
                  <span className="catergory">Near</span>
                  <input type="text" placeholder="San Francisco" />
                </span>
                <button type="button"><img src = {window.images.search} /></button>
              </div>

              <div className="signUpButton">
                <Link to ="/signUp">Sign Up</Link>
              </div>
            </div>
            <div className="quickLinkContainer">
            <div className="headerLinks">
              <div className="links">
                <Link to = "#"><img src = {window.images.restaurant} />Restaurants</Link>
                <Link to ="#"><img src = {window.images.nightlife} />NightLife</Link>
                <Link to ="#"><img src = {window.images.homeServices} />Home Services</Link>
                <Link to ="#"><img src = {window.images.delivery} />Delivery</Link>
                <Link to ="#">Write a Review</Link>
                <Link to ="#">Talk</Link>
                <Link to ="#">Events</Link>
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
