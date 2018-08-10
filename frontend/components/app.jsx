import React from 'react';
import SignUpContainer from './session/signUpContainer';
import NavBarContainer from './nav_bar/nav_bar_container.js';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import {AuthRoute,ProtectedRoute} from '../util/route_utils';
import LoginFormContainer from './session/loginFormContainer';
import SplashPage from './front_page/splash_page';
const App = () => (

  <div>
    <Switch>
     <AuthRoute exact path="/signUp" component={SignUpContainer} />
     <AuthRoute exact path = "/login" component={LoginFormContainer}/>
     <Route exact path = "/" component={SplashPage}/>
     <Redirect to = "/" />
    </Switch>
  </div>

);

export default App;
