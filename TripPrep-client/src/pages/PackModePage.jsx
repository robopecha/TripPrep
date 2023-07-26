import PackModeCard from "../components/PackModeCard";
import AddItemForm from "../components/AddItemForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

const listType = "topack";

function PackModePage() {
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
    <div className="flex flex-col items-center">
      <h3 className="text-4xl my-8">Packing!</h3>
        { items && items.map((item) => {
          if (tripID === item.trip && item.listType === 'topack') {
            return <PackModeCard key={item._id} item={item} refreshItems={getAllItems}/>
          }
          return null;
        })}
    </div>
  );
}

export default PackModePage;
