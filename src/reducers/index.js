import { combineReducers } from 'redux';
import allDriversReducer from './allDriversReducer';
import winnerReducer from './winnerReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  allDrivers: allDriversReducer,
  winner: winnerReducer,
  favorites: favoritesReducer
});
