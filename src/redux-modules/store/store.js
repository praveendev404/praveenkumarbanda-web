import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "../sagas/flightsaga";
import { FlightReducer } from "../reducers/flightReducer";

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(FlightReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
