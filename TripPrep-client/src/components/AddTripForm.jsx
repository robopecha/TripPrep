import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function AddTrip(props) {
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState("");
  const [season, setSeason] = useState("");
  const [startDate, setStartDate] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

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

        <label>Destination:</label>
        <input
          type="text"
          name="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label>Season:</label>
        <input
          type="text"
          name="season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        />

        <label>Start date:</label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTrip;
