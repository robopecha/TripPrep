import ItemCard from "../components/ItemCard";
import AddItemForm from "../components/AddItemForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

const listType = "todo";

function ListDoPage() {
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
      <h3 className="text-4xl my-6 text-center mt-10">To Do</h3>
      <div className="mt-4">
        <div>
          { items && items.map((item) => {
            if (tripID === item.trip && item.listType === 'todo') {
              return <ItemCard key={item._id} {...item} />
            }
            return null;
          })}
        </div>
        <AddItemForm refreshItems={getAllItems} listType={listType} />
      </div>
    </div>
  );
}

export default ListDoPage;
