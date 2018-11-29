import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Route } from 'react-router-dom';

import SeasonsList from './components/SeasonsList';
import SingleSeason from './components/SingleSeason';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Formula 1 App</h1>
          <Route exact path="/" component={SeasonsList} />
          <Route exact path="/seasons/:id" component={SingleSeason} />
        </div>
      </Provider>
    );
  }
}

export default App;
