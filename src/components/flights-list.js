import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFlights } from "../redux-modules/actions";

class FlightsList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      travelDate: undefined,
      returnDate: undefined,
      lstCities: ["Hyderabad", "Delhi", "Chenni", "Bengaluru"]
    };
  }
  componentDidMount() {
    this.props.getFlights();
  }
  handleDayChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  render() {
    const { lstCities, travelDate, returnDate } = this.state;
    const { flights } = this.props;
    debugger;
    return (
      <div>
        <div>
          <div className="search-bar">
            <div class="form-group">
              <label for="sel1">Source City</label>
              <select class="form-control" id="sel1">
                <option key="">--Select Source City--</option>
                {lstCities.map(item => (
                  <option key="item" value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div class="form-group">
              <label for="sel1">Destination City</label>
              <select class="form-control" id="sel1">
                <option key="">--Select Destination City--</option>
                {lstCities.map(item => (
                  <option key="item" value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div class="form-group">
              <label for="sel1">Travel Date</label>
              <DayPickerInput
                name="travelDate"
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                value={travelDate}
                onDayChange={this.handleDayChange}
              />
            </div>
            <div class="form-group">
              <label for="sel1">Return Date</label>
              <DayPickerInput
                name="returnDate"
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                value={returnDate}
                onDayChange={this.handleDayChange}
              />
            </div>
            <div>
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-default">
                Reset
              </button>
            </div>
          </div>
          <table
            border="1"
            cellPadding="0"
            cellSpacing="0"
            className="table-bordered"
          >
            <tr>
              <th>Flight Number</th>
              <th>Airline Name</th>
              <th>Source City</th>
              <th>Destination City</th>
              <th>Departure time</th>
              <th>Arrival Time</th>
              <th>Duration</th>
              <th>No. Of Stops</th>
              <th>Price</th>
            </tr>
            {flights &&
              flights.map(item => (
                <tr key={item.id}>
                  <td>{item.flightNumber}</td>
                  <td>{item.airlineName}</td>
                  <td>{item.sourceCity}</td>
                  <td>{item.destinationCity}</td>
                  <td>{item.departureTime.toString()}</td>
                  <td>{item.arrivaltime.toString()}</td>
                  <td>{item.duration}</td>
                  <td>{item.noOfStops}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
          </table>
          <div>Total</div>
        </div>
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch =>
  bindActionCreators(
    {
      getFlights: getFlights
    },
    dispatch
  );

const mapStateToProps = state => {
  const { flights } = state;
  return {
    flights
  };
};

const connectedFlightsList = connect(
  mapStateToProps,
  mapDispatchtoProps
)(FlightsList);
export { connectedFlightsList as FlightsList };
