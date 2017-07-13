import { combineReducers } from 'redux';
import api from '../utils/api';

// Actions
const SELECT_STATION = 'SELECT_STATION';
const CHANGE_STATION = 'CHANGE_STATION';
const CLEAR_STATION = 'CLEAR_STATION';
const FETCH_TRAINS_REQUEST = 'FETCH_TRAINS_REQUEST';
const FETCH_TRAINS_SUCCESS = 'FETCH_TRAINS_SUCCESS';
const FETCH_TRAINS_ERROR = 'FETCH_TRAINS_ERROR';

// Action Creators
export const selectStation = (station) => {
  return {
    type: SELECT_STATION,
    station
  }
}

function changeStation (station) {
  return {
    type: CHANGE_STATION,
    station
  }
}

function clearStation () {
  return {
    type: CLEAR_STATION
  }
}

function requestTrains(station) {
  return {
    type: FETCH_TRAINS_REQUEST,
    station
  }
}

function receiveTrains(trains) {
  return {
    type: FETCH_TRAINS_SUCCESS,
    trains
  }
}

function receiveError(error) {
  return {
    type: FETCH_TRAINS_ERROR,
    error
  }
}

export const fetchTrains = () => {
  return function (dispatch, getState) {
    const station = getState().station;
    dispatch(requestTrains(station))
    return api.fetchTrains(station)
      .then(response => {
        dispatch(changeStation(station))
        dispatch(receiveTrains(response))
        dispatch(clearStation())
      })
      .catch(e => {
        const errorMsg = `${e.name}: ${e.message}`
        dispatch(receiveError(errorMsg))
});
  }
}

//Reducers
function station(state = '', action) {
  switch (action.type) {
    case SELECT_STATION:
      return action.station.toUpperCase()
    case CLEAR_STATION:
      return '';
    default:
      return state
  }
}

function trains(state = {
  station: '',
  isFetching: false,
  didFetch: false,
  trains: []
}, action) {
  switch (action.type) {
    case FETCH_TRAINS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TRAINS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didFetch: true,
        trains: action.trains
      }
    case FETCH_TRAINS_ERROR:
      return {
        ...state,
        isFetching: false,
        didFetch: false,
        trains: action.error
      }
    case CHANGE_STATION:
      return {
        ...state,
        station: action.station
      }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  station,
  trains
})
