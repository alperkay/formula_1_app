import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import SeasonsList from './components/SeasonsList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Formula 1 App</h1>
          <SeasonsList />
        </div>
      </Provider>
    );
  }
}

export default App;
