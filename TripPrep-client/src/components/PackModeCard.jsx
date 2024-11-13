import React from "react";
import { mutate } from "swr";
import axios from "axios";

const API_URL = "http://localhost:5005";


function PackModeCard({ item }) {

  const [itemDone, setItemDone] = React.useState(item.done);

  function toggleClick() {
    setItemDone(!itemDone);
  }

  React.useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { done: itemDone };
    axios
    .put(
      `${API_URL}/api/items/${item._id}`,
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then(() => {
      mutate(`${API_URL}/api/items`);
    })
    .catch((error) => console.log(error));

  }, [itemDone]);

  return (
    <div className={item.done ? "border-2 border-black rounded-sm mb-4 p-3 overflow-scroll bg-green-400 hover:bg-green-500 w-80"
      : "border-2 border-black rounded-sm mb-4 p-3 overflow-scroll bg-white hover:bg-gray-100 w-80"} onClick={toggleClick}>
      <h5 className="text-lg">{item.content}</h5>
    </div>
  );
}

export default PackModeCard;










  // React.useEffect(() => {
  //   const storedToken = localStorage.getItem('authToken');
  //   const requestBody = { done: itemDone };
  //   axios
  //     .put(
  //       `${API_URL}/api/items/${item._id}`,
  //       requestBody,
  //       { headers: { Authorization: `Bearer ${storedToken}` } }
  //     )
  //     .then(() => {
  //       mutate(`${API_URL}/api/items`);
  //     })
  //     .catch((error) => console.log(error));

  // }, []);

  // React.useEffect(() => {
  //   const storedToken = localStorage.getItem('authToken');
  //   const requestBody = { packed: tripPacked };
  //   axios
  //     .put(
  //       `${API_URL}/api/trips/${tripID}`,
  //       requestBody,
  //       { headers: { Authorization: `Bearer ${storedToken}` } }
  //     )
  //     .then(() => {
  //       mutate(`${API_URL}/api/trips`);
  //     })
  //     .catch((error) => console.log(error));

  //   // if (tripPacked) navigate(`/trips/${tripID}/lists/success`);

  // }, []);
