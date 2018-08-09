import React from 'react';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';

const NavBar = ({currentUser,logOutUser}) => {

  const displayLogOut=()=> {
    if(currentUser) {
      return (
        <div>
          <h1>{currentUser.name}</h1>
          <button onClick={logOutUser}>LogOut</button>
        </div>
      );
    }
  }

  const showCorrectLinks = () => {
      return (
        <div>
          <div className="navBar">
              <h2>Write a Reiview</h2>
              <h2>Events</h2>
              <h2>Talk</h2>
              {displayLogOut()}
          </div>
        </div>
      );
  }

  return (
    <div>
      {showCorrectLinks()}
    </div>
  );
}

export default NavBar;
