import React from 'react';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
const NavBar = ({currentUser,logOutUser}) => {

  const showCorrectLinks = () => {
    if(currentUser) {
      return (
        <div>
            {currentUser.fname} {currentUser.lname}
            <button onClick={logOutUser}>LogOut</button>
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
