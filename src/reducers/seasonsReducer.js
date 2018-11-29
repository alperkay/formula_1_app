import { GET_SEASONS } from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEASONS:
      return action.payload;
    default:
      return state;
  }
}
