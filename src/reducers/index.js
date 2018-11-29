import { combineReducers } from 'redux';
import seasonsReducer from './seasonsReducer';

export default combineReducers({
  seasons: seasonsReducer
});
