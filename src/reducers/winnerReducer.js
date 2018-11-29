import { GET_SEASONS_WINNER, CLEAR_STATE } from '../actions/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEASONS_WINNER:
      return action.payload;
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
}
