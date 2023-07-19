import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddTrip(props) {
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState("");
  const [season, setSeason] = useState("");
  const [startDate, setStartDate] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { destination, country, season, startDate };

    const storedToken = localStorage.getItem('authToken');

    axios
      .post(
        `${API_URL}/api/projects`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setDestination("");
        setCountry("");
        setSeason("");
        setStartDate("");
        props.refreshTrips();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div>
      <h3>Add Trip</h3>

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

        <label>Start Date:</label>
        <input
          type="text"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTrip;
