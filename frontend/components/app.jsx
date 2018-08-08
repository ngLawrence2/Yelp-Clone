import React from 'react';
import SignUpContainer from './session/signUpContainer';
import NavBarContainer from './nav_bar/nav_bar_container.js';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import {AuthRoute,ProtectedRoute} from '../util/route_utils';
import LoginFormContainer from './session/loginFormContainer';
const App = () => (
  <div>
    <h1>Yelp</h1>
      <Route path = "/" component={NavBarContainer}/>
     <AuthRoute exact path="/signUp" component={SignUpContainer} />
     <AuthRoute exact path = "/login" component={LoginFormContainer}/>
  </div>
);

export default App;
