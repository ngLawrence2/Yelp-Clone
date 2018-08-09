import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser,logOutUser}) => {

  const displayLogOut=()=> {

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
          <h2><Link className = "signUp" to= "/signUp">Sign Up</Link></h2>
        </span>
      );
    }
  }

  const navBar = () => {
      return (
        <div>

          <div className="navBar">
            <div className="allLinks">
              <h2>Write a Reiview</h2>
              <h2>Events</h2>
              <h2>Talk</h2>
            </div>

            <div className= "sessionLinks">
              {displayLogOut()}
            </div>

          </div>


          <div className="logoImage">
            <img src = {window.images.logo} />
          </div>

          <div className="searchBar">
            <input type="text" placeholder="burgers,barbers,spas,handymen..."/>
            <input type="text" placeholder="San Francisco" />
            <button type="button"><img src = {window.images.search} /></button>
          </div>

          <div className="quickLinks">
            <Link to = "#"><img src = {window.images.restaurant} />Restaurants</Link>
            <Link to ="#"><img src = {window.images.nightlife} />NightLife</Link>
            <Link to ="#"><img src = {window.images.homeServices} />Home Services</Link>
            <Link to ="#"><img src = {window.images.delivery} />Delivery</Link>
          </div>

        </div>
      );
  }

  return (
    <div>
      {navBar()}
    </div>
  );
}

export default NavBar;
