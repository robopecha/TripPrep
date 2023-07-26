import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";


function PackModeCard({ item, refreshItems }) {
  const [itemDone, setItemDone] = useState(item.done);
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { done: itemDone };
    axios
      .put(
        `${API_URL}/api/items/${item._id}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        console.log(response);

      }).then(() => refreshItems());

  }, [itemDone]);

  const toggleClick = () => {
    setItemDone(!itemDone);
  }

  return (
    <div className={item.done ? "border-2 border-black rounded-sm mb-4 p-3 overflow-scroll bg-white hover:bg-green-500 w-80 bg-green-400" : "border-2 border-black rounded-sm mb-4 p-3 overflow-scroll bg-white hover:bg-gray-100 w-80"} onClick={toggleClick}>
      <h5 className="text-lg">{item.content}</h5>
    </div>
  );

}

export default PackModeCard;
