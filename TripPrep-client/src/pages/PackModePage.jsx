import PackModeCard from "../components/PackModeCard";
import BlueButton from "../components/BlueButton";
import React from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../context/item.context";
import TripContext from "../context/trip.context";
import { mutate } from "swr";
import axios from "axios";

const API_URL = "http://localhost:5005";


const listType = "topack";

function PackModePage() {

  const { trips, error: tripsError, isLoading: tripsLoading } = React.useContext(TripContext);
  const { tripID } = useParams();
  const theTrip = trips?.find(trip => trip._id === tripID);

  const [tripPacked, setTripPacked] = React.useState(theTrip?.packed);

  const { items, error: itemsError, isLoading: itemsLoading } = React.useContext(ItemContext);
  const theItems = items?.filter((item) => item.trip === tripID && item.listType === listType);

  function handleToggle() {
    setTripPacked(!tripPacked);
  }

  React.useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { packed: tripPacked };
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

  }, [tripPacked]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-4xl my-8">Packing!</h3>
        {itemsLoading && <p>Loading list...</p>}
        {itemsError && <p>Failed to load list.</p>}
        {theItems?.map((item) => <PackModeCard key={item._id} item={item} />)}
        <div className="relative inline-block">
          <BlueButton
            className={theTrip.packed ? "mt-7 relative bg-white border text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-black" : "mt-7"}
            onClick={handleToggle}
          >
            Everything is packed!
          </BlueButton>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor"
            className={theTrip.packed ? 'absolute -top-20 left-48 w-44 visible' : 'absolute -top-20 left-48 w-44 invisible'}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PackModePage;

// add back button
