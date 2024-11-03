import ShowPackCard from "../components/ShowPackCard";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

const listType = "topack";

function ShowPackListPage() {
  const {tripID} = useParams();
  const [items, setItems] = React.useState([]);

  function getAllItems() {
    const storedToken = localStorage.getItem("authToken");
    const config = storedToken ? { headers: { Authorization: `Bearer ${storedToken}` } } : {};

    axios
      .get(`${API_URL}/api/items`, config)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }

  React.useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around">
        <h3 className="text-2xl my-6 text-center mt-10">Look at this pack list!</h3>
      </div>
        <div>
          { items && items.map((item) => {
            if (tripID === item.trip && item.listType === listType) {
              return <ShowPackCard key={item._id} item={item} refreshItems={getAllItems} />
            }
            return null;
          })}
        </div>
    </div>
  );
}

export default ShowPackListPage;

// add back button
