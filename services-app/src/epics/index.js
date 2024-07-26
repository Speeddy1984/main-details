import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICE_DETAILS_REQUEST,
  fetchServicesSuccess,
  fetchServicesFailure,
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
} from '../actions';

const fetchServicesEpic = (action$) => action$.pipe(
  ofType(FETCH_SERVICES_REQUEST),
  mergeMap(() => ajax.getJSON('http://localhost:7070/api/services').pipe(
    map(response => fetchServicesSuccess(response)),
    catchError(error => of(fetchServicesFailure(error.message)))
  ))
);

const fetchServiceDetailsEpic = (action$) => action$.pipe(
  ofType(FETCH_SERVICE_DETAILS_REQUEST),
  mergeMap((action) => ajax.getJSON(`http://localhost:7070/api/services/${action.payload}`).pipe(
    map(response => fetchServiceDetailsSuccess(response)),
    catchError(error => of(fetchServiceDetailsFailure(error.message)))
  ))
);

export default combineEpics(
  fetchServicesEpic,
  fetchServiceDetailsEpic
);
