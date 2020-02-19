import { FlightConstants } from "../constants";

const getFlights = () => ({
  type: FlightConstants.Get_Request_Flights
});
const getSearchFlights = model => {
  debugger;
  return {
    type: FlightConstants.Get_Request_Search_Flights,
    model: model
  };
};

export { getFlights, getSearchFlights };
