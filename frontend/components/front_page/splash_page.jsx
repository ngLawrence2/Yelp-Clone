import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BestBusinessCategory from './bestBusinessCategory';
import Footer from '../footer/footer';
import {Route} from 'react-router-dom';
const SplashPage = () => {

  return (
    <div className= "splashPage">

      <div className="frontPageNav">
        <Route exact path = "/"  component ={NavBarContainer}></Route>
      </div>

      <div className = "catergory">
        <BestBusinessCategory />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};


export default SplashPage;
