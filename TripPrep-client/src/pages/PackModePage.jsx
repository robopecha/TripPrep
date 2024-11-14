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
  console.log('the trip:', theTrip);

  const [tripPacked, setTripPacked] = React.useState(theTrip?.packed);

  const { items, error: itemsError, isLoading: itemsLoading } = React.useContext(ItemContext);
  const theItems = items?.filter((item) => item.trip === tripID && item.listType === listType);
  console.log('the items:', theItems);

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
          <BlueButton className="mt-7 relative" onClick={handleToggle}>Everything is packed!</BlueButton>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor"
            className={theTrip.packed ? 'absolute -top-20 left-48 w-44 visible' : 'invisible'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PackModePage;

// add back button
