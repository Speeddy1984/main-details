export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';
export const FETCH_SERVICE_DETAILS_REQUEST = 'FETCH_SERVICE_DETAILS_REQUEST';
export const FETCH_SERVICE_DETAILS_SUCCESS = 'FETCH_SERVICE_DETAILS_SUCCESS';
export const FETCH_SERVICE_DETAILS_FAILURE = 'FETCH_SERVICE_DETAILS_FAILURE';

// Action creators
export const fetchServicesRequest = () => ({ type: FETCH_SERVICES_REQUEST });
export const fetchServicesSuccess = (services) => ({ type: FETCH_SERVICES_SUCCESS, payload: services });
export const fetchServicesFailure = (error) => ({ type: FETCH_SERVICES_FAILURE, payload: error });

export const fetchServiceDetailsRequest = (id) => ({ type: FETCH_SERVICE_DETAILS_REQUEST, payload: id });
export const fetchServiceDetailsSuccess = (service) => ({ type: FETCH_SERVICE_DETAILS_SUCCESS, payload: service });
export const fetchServiceDetailsFailure = (error) => ({ type: FETCH_SERVICE_DETAILS_FAILURE, payload: error });