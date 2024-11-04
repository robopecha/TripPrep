import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import TripContext from "../context/trip.context"
import { mutate } from "swr";

const API_URL = "http://localhost:5005";


function PackModeCard({ item, packedCheck }) {

  const { trips, error, isLoading } = React.useContext(TripContext);

  const {tripID} = useParams();
  const theTrip = trips.filter(trip => trip._id === tripID)
  console.log('trip:', theTrip[0].packed);

  const [itemDone, setItemDone] = React.useState(item.done);
  const [tripPacked, setTripPacked] = React.useState(theTrip[0].packed);
  console.log({tripPacked})

  function toggleClick() {
    setItemDone(!itemDone);
  }

  const navigate = useNavigate();

  React.useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { done: itemDone };
    axios
      .put(
        `${API_URL}/api/items/${item._id}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        setTripPacked(packedCheck());
        mutate(`${API_URL}/api/items`);
      })
      .catch((error) => console.log(error));

  }, [itemDone]);

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

    // if (tripPacked) navigate(`/trips/${tripID}/lists/success`);

  }, [tripPacked]);

  return (
    <div className={item.done ? "border-2 border-black rounded-sm mb-4 p-3 overflow-scroll bg-green-400 hover:bg-green-500 w-80"
      : "border-2 border-black rounded-sm mb-4 p-3 overflow-scroll bg-white hover:bg-gray-100 w-80"} onClick={toggleClick}>
      <h5 className="text-lg">{item.content}</h5>
    </div>
  );
}

export default PackModeCard;
