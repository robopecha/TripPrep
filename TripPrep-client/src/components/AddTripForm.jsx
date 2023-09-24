import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function AddTripForm() {
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState("");
  const [season, setSeason] = useState('');
  const [startDate, setStartDate] = useState("");
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/trips');

    const storedToken = localStorage.getItem('authToken');

    const requestBody = { destination, country, season, startDate, userID: user._id };

    axios
      .post(
        `${API_URL}/api/trips`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setDestination("");
        setCountry("");
        setSeason("");
        setStartDate("");
      })
      .catch((error) => console.log(error));
  };


  return (
    <div>

      <form onSubmit={handleSubmit}>

        <div className="mb-5">
          <label>Destination:</label>
          <input
            required
            type="text"
            name="destination"
            value={destination}
            className="border border-black rounded-sm w-80 h-10"
            onChange={event => setDestination(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label>Country:</label>
          <input
            required
            type="text"
            name="country"
            value={country}
            className="border border-black rounded-sm w-80 h-10"
            onChange={event => setCountry(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label>Season:</label>
          <select
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
          <label>Start date:</label>
          <input
            required
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

export default AddTripForm;
