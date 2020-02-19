import { FlightConstants } from "../constants";

const getFlights = () => ({
  type: FlightConstants.Get_Request_Flights
});
const getSearchFlights = () => ({
  type: FlightConstants.Get_Request_Search_Flights
});

export { getFlights, getSearchFlights };
