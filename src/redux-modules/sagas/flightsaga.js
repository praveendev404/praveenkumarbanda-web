import { put, all, takeLatest } from "redux-saga/effects";
import { FlightConstants } from "../constants";

function* getFlights() {
  const lstFlights = [
    {
      id: 1,
      flightNumber: 123455,
      airlineName: "Air India",
      sourceCity: "Hyderabad",
      destinationCity: "Delhi",
      departureTime: new Date(),
      arrivaltime: new Date(),
      duration: 2,
      noOfStops: 3,
      price: 7654
    }
  ];
  yield put({ type: FlightConstants.Get_Success_Flights, result: lstFlights });
}

function* getFlightsWatcher() {
  yield takeLatest(FlightConstants.Get_Request_Flights, getFlights);
}

export default function* rootSaga() {
  yield all([getFlightsWatcher()]);
}
