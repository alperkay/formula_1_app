import { GET_SINGLE_SEASON } from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_SEASON:
      return action.payload;
    default:
      return state;
  }
}
