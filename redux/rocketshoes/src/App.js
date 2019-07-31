import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import './config/reactotronConfig';

import history from './services/history';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  </Provider>
);

export default App;
