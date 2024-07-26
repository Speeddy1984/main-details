import {
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICE_DETAILS_REQUEST,
    FETCH_SERVICE_DETAILS_SUCCESS,
    FETCH_SERVICE_DETAILS_FAILURE,
  } from '../actions';
  
  const initialServicesState = {
    loading: false,
    services: [],
    error: null,
  };
  
  export const servicesReducer = (state = initialServicesState, action) => {
    switch (action.type) {
      case FETCH_SERVICES_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_SERVICES_SUCCESS:
        return { ...state, loading: false, services: action.payload };
      case FETCH_SERVICES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  const initialServiceDetailsState = {
    loading: false,
    service: null,
    error: null,
  };
  
  export const serviceDetailsReducer = (state = initialServiceDetailsState, action) => {
    switch (action.type) {
      case FETCH_SERVICE_DETAILS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_SERVICE_DETAILS_SUCCESS:
        return { ...state, loading: false, service: action.payload };
      case FETCH_SERVICE_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  