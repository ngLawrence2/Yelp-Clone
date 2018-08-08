import React from 'react';

const NavBar = ({currentUser,logOutUser}) => {
  return (
    <div>
      Login
      SignUp
      <button onClick={logOutUser}>LogOut</button>
    </div>
  );
}

export default NavBar;
