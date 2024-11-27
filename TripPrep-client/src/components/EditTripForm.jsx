import BlueButton from "../components/BlueButton";
import React from "react";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


function EditTripForm({ trip }) {

  const [destination, setDestination] = React.useState(trip?.destination);
  const [country, setCountry] = React.useState(trip?.country);
  const [season, setSeason] = React.useState(trip?.season);
  const [startDate, setStartDate] = React.useState(formatDate(trip?.startDate));

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  }

  const id = React.useId();
  const destinationId = `${id}-destination`;
  const countryId = `${id}-country`;
  const seasonId = `${id}-season`;
  const startDateId = `${id}-startDate`;

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { destination, country, season, startDate };
    axios
      .put(
        `${API_URL}/api/trips/${trip?._id}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        mutate(`${API_URL}/api/trips`);
      })
      .catch((error) => console.log(error));

    navigate(`/trips/${trip?._id}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor={destinationId}>Destination:</label>
          <input
            id={destinationId}
            required
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
            required
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
            required
            value={season}
            onChange={event => setSeason(event.target.value)}
            className="border border-black rounded-sm w-80 h-10">
              <option value=''>— select season —</option>
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
            required
            type="date"
            name="startDate"
            value={startDate}
            className="border border-black rounded-sm w-80 h-10"
            onChange={event => setStartDate(event.target.value)}
          />
        </div>

        <BlueButton type={'submit'} className="mt-8">Submit</BlueButton>
      </form>
    </div>
  );
}


export default EditTripForm;
