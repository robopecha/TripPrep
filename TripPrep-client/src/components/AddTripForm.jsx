import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function AddTrip(props) {
  const [destination, setDestination] = useState("");
  const [country, setCountry] = useState("");
  const [season, setSeason] = useState("");
  const [startDate, setStartDate] = useState("");
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
            type="text"
            name="destination"
            value={destination}
            className="border border-black rounded-sm"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={country}
            className="border border-black rounded-sm"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label>Season:</label>
          <input
            type="text"
            name="season"
            value={season}
            className="border border-black rounded-sm"
            onChange={(e) => setSeason(e.target.value)}
          />
        </div>

        <div className="mb-15">
          <label>Start date:</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            className="border border-black rounded-sm"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-blue-500 mt-8 p-1 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200">Submit</button>
      </form>
    </div>
  );
}

export default AddTrip;
