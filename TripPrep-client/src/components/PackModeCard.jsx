import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TripContext from "../context/trip.context"
import { mutate } from "swr";

const API_URL = "http://localhost:5005";


function PackModeCard({ item }) {

  const { tripID } = useParams();
  const { trips, error, isLoading } = React.useContext(TripContext);

  const [items, setItems] = React.useState([]);

  const theTrip = trips.filter(trip => trip._id === tripID)
  const [tripPacked, setTripPacked] = React.useState(theTrip.packed);

  const [itemDone, setItemDone] = React.useState(item.done);

  React.useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { done: itemDone };
    axios
      .put(
        `${API_URL}/api/items/${item._id}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        console.log(response);

    mutate(`${API_URL}/api/items`);

  }, [itemDone]);

  function toggleClick() {
    setItemDone(!itemDone);

    React.useEffect(() => {
      const storedToken = localStorage.getItem('authToken');
      const requestBody = { packed: tripPacked };
      axios
        .put(
          `${API_URL}/api/trips/${tripID}`,
          requestBody,
          { headers: { Authorization: `Bearer ${storedToken}` } }
        )
        .then((response) => {
          console.log(response);

      mutate(`${API_URL}/api/trips`);

    }, [tripPacked]);

  }

  return (
    <div className={item.done ? "border-2 border-black rounded-sm mb-4 p-3 overflow-scroll bg-green-400 hover:bg-green-500 w-80" : "border-2 border-black rounded-sm mb-4 p-3 overflow-scroll bg-white hover:bg-gray-100 w-80"} onClick={toggleClick}>
      {isLoading && <p>Loading item...</p>}
      {error && <p>Failed to load item.</p>}
      <h5 className="text-lg">{item.content}</h5>
    </div>
  );

}

export default PackModeCard;
