import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  city: {},
  loading: false,
  error: null,
};

const fetchStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchSuccessful = (state, action) => {
  return updateObject(state, { city: action.payload, loading: false, error: null });
};

const fetchError = (state, action) => {
  return updateObject(state, { error: action.payload, loading: false, city: {} });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CITY_START:
      return fetchStart(state, action);
    case actionTypes.FETCH_CITY_SUCCESSFUL:
      return fetchSuccessful(state, action);
    case actionTypes.FETCH_CITY_ERROR:
      return fetchError(state, action);
    default:
      return state;
  }
};

export default reducer;
