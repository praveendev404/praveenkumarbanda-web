import { FlightConstants } from "../constants";

export function FlightReducer(state = {}, action) {
  switch (action.type) {
    case FlightConstants.Get_Request_Flights:
      return {
        ...state,
        loading: true
      };
    case FlightConstants.Get_Success_Flights:
      return {
        ...state,
        flights: action.result
      };

    default:
      return state;
  }
}
