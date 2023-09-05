import PackModeCard from "../components/PackModeCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import TripContext from "../context/trip.context"

const API_URL = "http://localhost:5005";

const listType = "topack";

function PackModePage() {
  const {tripID} = useParams();
  const {trips} = useContext(TripContext);
  const [items, setItems] = useState([]);

  const theTrip = trips.filter(trip => trip._id === tripID)
  const [tripPacked, setTripPacked] = useState(theTrip.packed);

  const getAllItems = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(
      `${API_URL}/api/items`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setItems(response.data.filter(item => tripID === item.trip && item.listType === 'topack')))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllItems();
  }, []);


  // setTripPacked(items.every(item => item.done === true));


  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl my-8">Packing!</h3>
      { items && items.map(item => <PackModeCard key={item._id} item={item} refreshItems={getAllItems}/>) }
    </div>
  );
}

export default PackModePage;

// add back button

