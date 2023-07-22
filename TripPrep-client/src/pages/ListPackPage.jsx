import ItemCard from "../components/ItemCard";
import AddItemForm from "../components/AddItemForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

const listType = "topack";

function ListPackPage() {
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
      <h3>To Pack</h3>
      <Link to={`/trips/${tripID}/lists/packmode`}>Pack Mode</Link>
      { items && items.map((item) => {
        if (tripID === item.trip && item.listType === 'topack') {
          return <ItemCard key={item._id} {...item} />
        }
        return null;
      })}
      <AddItemForm refreshItems={getAllItems} listType={listType} />
    </div>
  );
}

export default ListPackPage;
