import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getWinner = year => dispatch => {
  axios
    .get(`http://ergast.com/api/f1/${year}/driverStandings/1.json`)
    .then(response => {
      dispatch({
        type: actionTypes.GET_SEASONS_WINNER,
        payload:
          response.data.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings[0].Driver
      });
    })
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err
      })
    );
};
