import React from 'react';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
const NavBar = ({currentUser,logOutUser}) => {

  const showCorrectLinks = () => {

    if(currentUser) {
      return (
        <div>
          <div className="navBar">
            <div>

              <h2>Write a Reiview</h2>
              <h2>Events</h2>
              <h2>Talk</h2>
            </div>
            <div>
              <h1>{currentUser.name}</h1>
              <button onClick={logOutUser}>LogOut</button>
            </div>
          </div>
        </div>
      );
    }
  }


  return (
    <div>
      {showCorrectLinks()}
    </div>
  );
}

export default NavBar;
