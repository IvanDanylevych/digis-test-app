import * as actionsTypes from './actionTypes';

import { getCity } from '../../api';

export const fetchCityStart = () => {
  return {
    type: actionsTypes.FETCH_CITY_START,
  };
};

export const fetchCitySuccess = cities => {
  return {
    type: actionsTypes.FETCH_CITY_SUCCESSFUL,
    payload: cities,
  };
};

export const fetchCityFail = error => {
  return {
    type: actionsTypes.FETCH_CITY_ERROR,
    payload: error,
  };
};

export const fetchCity = cityName => {
  return dispatch => {
    dispatch(fetchCityStart());
    getCity(cityName)
      .then(res => {
        dispatch(fetchCitySuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchCityFail(error.response.data));
      });
  };
};
