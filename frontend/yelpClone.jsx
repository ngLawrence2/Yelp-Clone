import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchBusiness,fetchBusinesses, receiveAllBusinesses,receiveBusiness} from './actions/business/business';
import {createReview} from './util/review';

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


  window.getState= store.getState;
  window.dispatch=store.dispatch;
  window.createReview=createReview;
  window.receiveAllBusinesses = receiveAllBusinesses;
  window.receiveBusiness = receiveBusiness;
  window.fetchBusinesses=fetchBusinesses;
  window.fetchBusiness = fetchBusiness;


  ReactDOM.render(<Root store={store} />, root);
});
