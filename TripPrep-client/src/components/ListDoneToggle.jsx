import React from "react";
import BlueButton from "./BlueButton";
import { useParams } from "react-router-dom";
import TripContext from "../context/trip.context";
import { mutate } from "swr";
import axios from "axios";

const API_URL = "http://localhost:5005";


function ListDoneToggle({ listType, className = '', children }) {

  const { trips, error, isLoading } = React.useContext(TripContext);
  const { tripID } = useParams();
  const theTrip = trips?.find(trip => trip._id === tripID);



  const [listDone, setListDone] = React.useState(theTrip?.[`${listType}Done`]);

  function handleToggle() {
    setListDone(!listDone);
  }

  React.useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { [`${listType}Done`]: listDone };
    axios
      .put(
        `${API_URL}/api/trips/${tripID}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        mutate(`${API_URL}/api/trips`);
      })
      .catch((error) => console.log(error));

  }, [listDone]);


  return (
    <div className="relative inline-block">
      <BlueButton
        className={theTrip?.[`${listType}Done`] ? `mt-7 relative bg-white border text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-black ${className}` : `mt-7 ${className}`}
        onClick={handleToggle}
      >
        {children}
      </BlueButton>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor"
        className={theTrip?.[`${listType}Done`] ? 'absolute -top-20 left-48 w-44 visible' : 'absolute -top-20 left-48 w-44 invisible'}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  );
}


export default ListDoneToggle;
