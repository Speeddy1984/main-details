import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { servicesReducer, serviceDetailsReducer } from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  services: servicesReducer,
  serviceDetails: serviceDetailsReducer,
});

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;