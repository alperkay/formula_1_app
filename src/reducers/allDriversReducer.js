import { GET_SEASONS_DRIVERS, CLEAR_STATE } from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEASONS_DRIVERS:
      return action.payload;
    case CLEAR_STATE:
      return [];
    default:
      return state;
  }
}
