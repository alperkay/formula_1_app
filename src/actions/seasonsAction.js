import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getSeasons = year => dispatch => {
  axios
    .get(`http://ergast.com/api/f1/${year}/results/1.json`)
    .then(response => {
      dispatch({
        type: actionTypes.GET_SEASONS,
        payload: response.data.MRData.RaceTable.Races
      });
    });
};
