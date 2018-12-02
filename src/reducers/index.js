import { combineReducers } from 'redux';
import allDriversReducer from './allDriversReducer';
import winnerReducer from './winnerReducer';
import favoritesReducer from './favoritesReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  allDrivers: allDriversReducer,
  winner: winnerReducer,
  favorites: favoritesReducer,
  errors: errorsReducer
});
