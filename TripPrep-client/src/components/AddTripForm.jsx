import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { mutate } from "swr";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


function AddTripForm() {

  const { user } = React.useContext(AuthContext);

  const [destination, setDestination] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [season, setSeason] = React.useState('');
  const [startDate, setStartDate] = React.useState("");

  const id = React.useId();
  const destinationId = `${id}-destination`;
  const countryId = `${id}-country`;
  const seasonId = `${id}-season`;
  const startDateId = `${id}-startDate`;

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
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
    navigate('/trips');
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

        <Button type={'submit'} className="blue-button mt-8">Submit</Button>
      </form>
    </div>
  );
}


export default AddTripForm;
