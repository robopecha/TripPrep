import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function ItemCard({ item, refreshItems }) {
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
    <div className="border border-black rounded-sm mb-3 p-2 overflow-scroll bg-white hover:bg-gray-100 w-80" onClick={toggleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={item.done ? 'w-6 inline ml-1 visible' : 'w-7 inline ml-1 invisible'}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <h5 className={item.done ? "inline ml-3 opacity-40 text-sm" : "inline ml-3 text-sm"}>{item.content}</h5>
    </div>
  );
}

export default ItemCard;
