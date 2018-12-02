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
          <div className="header">
            <h1>
              <Link to="/">Formula 1 App</Link>
            </h1>
          </div>
          <div className="info">
            <p>
              You can select your favorite drivers from the 'Seasons' list and
              make yourself a 'Favorites' list. Both lists are scrollable and
              you can modify your favorites list by clicking on each driver
              which will remove that driver from the list. The driver with a
              trophy icon before his name is the champion of that season.
            </p>
          </div>
          <Route exact path="/" component={SeasonsList} />
          <Route exact path="/seasons/:id" component={SingleSeason} />
          <FavoritesList />
        </div>
      </Provider>
    );
  }
}

export default App;
