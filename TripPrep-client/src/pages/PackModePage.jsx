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
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllItems();
  }, []);


  useEffect(() => {
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

      }).then(() => refreshItems());
                                                       // if packed is true navigate to success
  }, [tripPacked]);


  const listItems = items.filter(item => tripID === item.trip && item.listType === 'topack');

  listItems.filter(item => item.done === true).length === listItems.length ? setTripPacked(true) : setTripPacked(false);


  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl my-8">Packing!</h3>
      { listItems && listItems.map(item => <PackModeCard key={item._id} item={item} refreshItems={getAllItems}/>) }
    </div>
  );
}

export default PackModePage;
