import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BestBusinessCategory from './bestBusinessCategory';

const SplashPage = () => {
  console.log("splash_page");
  return (
    <div>
      <div className="frontPageNav">
          <NavBarContainer />
      </div>
        <BestBusinessCategory />
    </div>
  );
};


export default SplashPage;
