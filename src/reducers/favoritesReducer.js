import { ADD_FAVORITES, REMOVE_FAVORITES } from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES:
      return [
        ...state.filter(fav => fav.driverId !== action.payload.driverId),
        action.payload
      ];
    case REMOVE_FAVORITES:
      return [...state.filter(fav => fav.driverId !== action.payload)];
    default:
      return state;
  }
}
