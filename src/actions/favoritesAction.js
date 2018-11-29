import * as actionTypes from './actionTypes';

export const addFavorite = favorite => dispatch => {
  dispatch({
    type: actionTypes.ADD_FAVORITES,
    payload: favorite
  });
};

export const removeFavorite = favoriteId => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_FAVORITES,
    payload: favoriteId
  });
};
