import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeleteIcon from './DeleteIcon';

import { removeFavorite } from '../actions/favoritesAction';

class FavoritesList extends Component {
  render() {
    const { favorites } = this.props;
    return (
      <div className="favorites_list">
        <h2>Your Favorite Drivers</h2>
        <ul>
          {favorites.map(fav => (
            <li
              key={fav.driverId}
              onClick={() => this.props.removeFavorite(fav.driverId)}
            >
              {fav.givenName} {fav.familyName}
              <DeleteIcon />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const MapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(
  MapStateToProps,
  { removeFavorite }
)(FavoritesList);
