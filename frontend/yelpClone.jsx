import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchBusiness,fetchBusinesses} from './util/business';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  let store;
  if(window.current_user) {
    preloadedState = {
      session: {
        currentUser: window.current_user
      }
    }
    store= configureStore(preloadedState);
  }else {
    store= configureStore();
  }
  delete window.current_user;
  window.store= store;
  window.fetchBusiness = fetchBusiness;
  window.fetchBusinesses=fetchBusinesses;


  ReactDOM.render(<Root store={store} />, root);
});
