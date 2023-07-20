import { useState, useEffect } from "react";
import axios from "axios";

import TripCard from "../components/TripCard";

const API_URL = "http://localhost:5005";


function TripPage() {
  const [trips, setTrips] = useState([]);

  const getAllTrips = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(
      `${API_URL}/api/trips`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setTrips(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllTrips();
  }, []);

  return (
    <div>
      <h3>My Trips</h3>
      {trips.map((trip) => (
        <TripCard key={trip._id} {...trip} />
      ))}
    </div>
  );
}

export default TripPage;
