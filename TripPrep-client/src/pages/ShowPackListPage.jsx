import ItemCard from "../components/ItemCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

const listType = "topack";

function ShowPackListPage() {
  const {tripID} = useParams();
  const [items, setItems] = useState([]);

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

  return (
    <div>
      <h3 className="text-2xl my-6">Look at this packing list!</h3>
      { items && items.map((item) => {
        if (tripID === item.trip && item.listType === 'topack') {
          return <ItemCard key={item._id} {...item} />
        }                                                                 // button to copy to new trip
        return null;
      })}
    </div>
  );
}

export default ShowPackListPage;
