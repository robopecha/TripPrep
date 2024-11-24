import Header from "../components/Header";
import EditTripForm from "../components/AddTripForm";
import PublicToggle from "../components/PublicToggle";
import RedButton from "../components/RedButton";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mutate } from "swr";
import axios from "axios";

const API_URL = "https://tripprep.fly.dev/" || "http://localhost:3000";


function MyTripEditPage() {

  const { tripID } = useParams();

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
      <EditTripForm />
      <PublicToggle tripID={tripID} />
      <RedButton className="mt-10 text-sm" onClick={deleteTrip}>Delete trip</RedButton>
    </div>
  );
}


export default MyTripEditPage;
