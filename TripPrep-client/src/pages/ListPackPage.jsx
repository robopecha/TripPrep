import PackCard from "../components/PackCard";
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
    <div className="flex flex-col items-center">
      <div className="flex justify-around">
        <Link to={`/trips/${tripID}/lists/todo`} className="mr-20 text-xl mt-12 text-yellow-400 hover:text-black transition ease-in-out duration-200">To Do</Link>
        <h3 className="text-4xl my-6 text-center mt-10">To Pack</h3>
        <Link to={`/trips/${tripID}/lists/tobuy`} className="ml-20 text-xl mt-12 text-yellow-400 hover:text-black transition ease-in-out duration-200">To Buy</Link>
      </div>
      <Link to={`/trips/${tripID}/lists/packmode`}><button className="bg-blue-500 mb-8 rounded-sm border-2 border-white hover:border-black p-2 transition ease-in-out duration-200">Pack Mode</button></Link>
      <div className="mt-4">
        <div>
          { items && items.map((item) => {
            if (tripID === item.trip && item.listType === 'topack') {
              return <PackCard key={item._id} item={item} refreshItems={getAllItems} />
            }
            return null;
          })}
        </div>
        <AddItemForm refreshItems={getAllItems} listType={listType} />
      </div>
    </div>
  );
}

export default ListPackPage;

// add back button
