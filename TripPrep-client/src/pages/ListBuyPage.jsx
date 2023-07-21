import ItemCard from "../components/ItemCard";
import AddItemForm from "../components/AddItemForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

const listType = "tobuy";

function ListBuyPage() {
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
      <h3>To Buy</h3>
      { items && items.map((item) => {
        if (tripID === item.trip && item.listType === 'tobuy') {
          return <ItemCard key={item._id} {...item} />
        }
        return null;
      })}
      <AddItemForm refreshItems={getAllItems} listType={listType} />
    </div>
  );
}

export default ListBuyPage;
