import { FlightConstants } from "../constants";

const getFlights = () => ({
  type: FlightConstants.Get_Request_Flights
});

export { getFlights };
