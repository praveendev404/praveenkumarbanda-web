import { put, all, takeLatest } from "redux-saga/effects";
import { FlightConstants } from "../constants";

function* getFlights() {
  yield put({ type: FlightConstants.Get_Success_Flights, result: lstFlights });
}

function* getFlightsWatcher() {
  yield takeLatest(FlightConstants.Get_Request_Flights, getFlights);
}

function* getSearchFlights(model) {
  debugger;
  // const test = model;
  var result = lstFlights.filter(function(item, i) {
    return (
      item["destinationCity"] == model.model.destinationCity &&
      item["sourceCity"] == model.model.sourceCity
    );
  });
  yield put({
    type: FlightConstants.Get_Success_Flights,
    result: result
  });
}

function* getSearchFlightsWatcher() {
  yield takeLatest(
    FlightConstants.Get_Request_Search_Flights,
    getSearchFlights
  );
}

export default function* rootSaga() {
  yield all([getFlightsWatcher(), getSearchFlightsWatcher()]);
}
var nowDate = new Date();
const lstFlights = [
  {
    id: 1,
    flightNumber: 123455,
    airlineName: "Air India",
    sourceCity: "Hyderabad",
    destinationCity: "Delhi",
    departureTime: new Date(nowDate.setHours(nowDate.getHours() + 6)),
    arrivaltime: new Date(nowDate.setHours(nowDate.getHours() + 9)),
    duration: 2,
    noOfStops: 3,
    price: 7654
  },
  {
    id: 2,
    flightNumber: 87,
    airlineName: "Air India",
    sourceCity: "Delhi",
    destinationCity: "Hyderabad",
    departureTime: new Date(nowDate.setHours(nowDate.getHours() + 1)),
    arrivaltime: new Date(nowDate.setHours(nowDate.getHours() + 4)),
    duration: 2,
    noOfStops: 3,
    price: 9256
  },
  {
    id: 3,
    flightNumber: 2345,
    airlineName: "Air India",
    sourceCity: "Kolkata",
    destinationCity: "Hyderabad",
    departureTime: new Date(nowDate.setHours(nowDate.getHours() + 3)),
    arrivaltime: new Date(nowDate.setHours(nowDate.getHours() + 12)),
    duration: 2,
    noOfStops: 3,
    price: 7654
  },
  {
    id: 4,
    flightNumber: 7674,
    airlineName: "Air India",
    sourceCity: "Hyderabad",
    destinationCity: "Chenni",
    departureTime: new Date(nowDate.setHours(nowDate.getHours() + 7)),
    arrivaltime: new Date(nowDate.setHours(nowDate.getHours() + 12)),
    duration: 2,
    noOfStops: 3,
    price: 1234
  },
  {
    id: 5,
    flightNumber: 9843,
    airlineName: "Air India",
    sourceCity: "Chenni",
    destinationCity: "Delhi",
    departureTime: new Date(nowDate.setHours(nowDate.getHours() + 1)),
    arrivaltime: new Date(nowDate.setHours(nowDate.getHours() + 4)),
    duration: 2,
    noOfStops: 3,
    price: 9844
  },
  {
    id: 6,
    flightNumber: 8734834,
    airlineName: "Air India",
    sourceCity: "Chenni",
    destinationCity: "Mumbai",
    departureTime: new Date(nowDate.setHours(nowDate.getHours() + 3)),
    arrivaltime: new Date(nowDate.setHours(nowDate.getHours() + 9)),
    duration: 2,
    noOfStops: 3,
    price: 6354
  }
];
