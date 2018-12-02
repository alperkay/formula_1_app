import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getSeasonsDrivers = year => dispatch => {
  axios
    .get(`https://ergast.com/api/f1/${year}/drivers.json`)
    .then(response => {
      dispatch({
        type: actionTypes.GET_SEASONS_DRIVERS,
        payload: response.data.MRData.DriverTable.Drivers
      });
    })
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err
      })
    );
};
