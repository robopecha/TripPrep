import Header from "../components/Header";
import EditTripForm from "../components/EditTripForm";
import PublicToggle from "../components/PublicToggle";
import RedButton from "../components/RedButton";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TripContext from "../context/trip.context";
import { mutate } from "swr";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


function MyTripEditPage() {

  const { tripID } = useParams();
  const { trips, error, isLoading } = React.useContext(TripContext);
  const theTrip = trips?.find(trip => trip._id === tripID);

  const navigate = useNavigate();

  function deleteTrip() {
    const storedToken = localStorage.getItem('authToken');
    axios
      .delete(
        `${API_URL}/api/trips/${tripID}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        mutate(`${API_URL}/api/trips`);
        navigate('/trips');
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="text-center">
      <Header>Edit my Trip</Header>
      {isLoading && <p>Loading trip...</p>}
      {error && <p>Failed to load trip.</p>}
      {!isLoading && !error && !theTrip && <p>Trip not found.</p>}
      {!isLoading && !error && theTrip && (
        <>
          <EditTripForm trip={theTrip} />
          <PublicToggle trip={theTrip} />
          <RedButton className="mt-10 text-sm" onClick={deleteTrip}>Delete trip</RedButton>
        </>
      )}
    </div>
  );
}


export default MyTripEditPage;
