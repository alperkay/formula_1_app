import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Link } from 'react-router-dom';

import SeasonsList from './components/SeasonsList';
import SingleSeason from './components/SingleSeason';
import FavoritesList from './components/FavoritesList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>
            <Link to="/">Formula 1 App</Link>
          </h1>
          <Route exact path="/" component={SeasonsList} />
          <Route exact path="/seasons/:id" component={SingleSeason} />
          <FavoritesList />
        </div>
      </Provider>
    );
  }
}

export default App;
