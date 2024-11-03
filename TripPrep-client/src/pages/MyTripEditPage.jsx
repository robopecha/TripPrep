import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import TripContext from "../context/trip.context";
import { mutate } from "swr";


const API_URL = "http://localhost:5005";

function MyTripEditPage() {

  const { tripID } = useParams();
  const { user } = React.useContext(AuthContext);
  const { trips, error, isLoading } = React.useContext(TripContext);

  const theTrip = trips.filter(trip => trip._id === tripID);

  const [destination, setDestination] = React.useState(theTrip.destination);
  const [country, setCountry] = React.useState(theTrip.country);
  const [season, setSeason] = React.useState(theTrip.season);
  const [startDate, setStartDate] = React.useState(theTrip.startDate);

  const id = React.useId();

  const destinationId = `${id}-destination`;
  const countryId = `${id}-country`;
  const seasonId = `${id}-season`;
  const startDateId = `${id}-startDate`;

  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/trips/${tripID}`);

    const storedToken = localStorage.getItem('authToken');

    const requestBody = { destination, country, season, startDate, userID: user._id };

    axios
      .post(
        `${API_URL}/api/trips`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .catch((error) => console.log(error));

    mutate(`${API_URL}/api/trips`);
  }


  return (
    <div className="text-center">
      <h3 className="text-4xl mt-6 mb-12">Edit my trip</h3>
      <form onSubmit={handleSubmit}>
        {isLoading && <p>Loading trip...</p>}
        {error && <p>Failed to load trip.</p>}
        <div className="mb-5">
          <label htmlFor={destinationId}>Destination:</label>
          <input
            id={destinationId}
            type="text"
            name="destination"
            value={destination}
            className="border border-black rounded-sm w-80 h-10"
            onChange={event => setDestination(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor={countryId}>Country:</label>
          <input
            id={countryId}
            type="text"
            name="country"
            value={country}
            className="border border-black rounded-sm w-80 h-10"
            onChange={event => setCountry(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor={seasonId}>Season:</label>
          <select
            id={seasonId}
            value={season}
            onChange={event => setSeason(event.target.value)}
            className="border border-black rounded-sm w-80 h-10">
              <option hidden selected>- pick one -</option>
              <option value="spring">spring</option>
              <option value="summer">summer</option>
              <option value="autumn">autumn</option>
              <option value="winter">winter</option>
          </select>
        </div>

        <div className="mb-15">
          <label htmlFor={startDateId}>Start date:</label>
          <input
            id={startDateId}
            type="date"
            name="startDate"
            value={startDate}
            className="border border-black rounded-sm w-80 h-10"
            onChange={event => setStartDate(event.target.value)}
          />
        </div>

        <button type="submit" className="bg-blue-500 mt-8 p-2 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200">Submit</button>
      </form>
    </div>
  );
}

// add delete button

export default MyTripEditPage;
