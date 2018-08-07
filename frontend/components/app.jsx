import React from 'react';
import SignUpContainer from './session/signUpContainer';
import NavBarContainer from './nav_bar/nav_bar_container.js';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';

const App = () => (
  <div>
    <h1>Yelp</h1>
    <Route path = "/" component={NavBarContainer}/>
    <Route path= "/signUp"><SignUpContainer /></Route>
  </div>
);

export default App;
