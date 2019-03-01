import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import MainArea from './components/MainArea';

import { Provider } from 'react-redux';
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <MainArea />
        </div>
      </Provider>
    );
  }
}

export default App;
