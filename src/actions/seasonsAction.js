import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getSeasons = () => dispatch => {
  axios.get('http://ergast.com/api/f1/2008/results/1.json').then(response => {
    dispatch({
      type: actionTypes.GET_SEASONS,
      payload: response.data.MRData.RaceTable.Races
    });
  });
};
