import BlueButton from "./BlueButton";
import React from "react";
import { useParams } from "react-router-dom";
import TripContext from "../context/trip.context";
import { mutate } from "swr";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


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
    <>
      {isLoading && <p>Loading Finished-button...</p>}
      {error && <p>Failed to load Finished-button.</p>}
      {!isLoading && !error && !theTrip && <p>Data for Finished-button not found.</p>}
      {!isLoading && !error && theTrip && (
        <div className="relative inline-block mt-5">
          <BlueButton
            className={theTrip[`${listType}Done`] ? `mt-7 mb-14 relative bg-yellow-400 text-black border-white hover:bg-blue-500 hover:border-white ${className}` : `mt-7 mb-14 relative bg-white text-blue-500 !border-blue-500 hover:bg-blue-500 hover:text-black hover:!border-white ${className}`}
            onClick={handleToggle}
          >
            {children}
          </BlueButton>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor"
            className={theTrip[`${listType}Done`] ? 'absolute -top-4 left-52 w-24 visible' : 'absolute -top-4 left-52 w-24 invisible'}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      )}
    </>
  );
}


export default ListDoneToggle;
