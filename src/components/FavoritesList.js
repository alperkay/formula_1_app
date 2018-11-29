import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFavorite } from '../actions/favoritesAction';

class FavoritesList extends Component {
  render() {
    const { favorites } = this.props;
    return (
      <div className="favorites_list">
        <h1>Favorites</h1>
        <ul>
          {favorites.map(fav => (
            <li onClick={() => this.props.removeFavorite(fav.driverId)}>
              {fav.givenName} {fav.familyName}
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
