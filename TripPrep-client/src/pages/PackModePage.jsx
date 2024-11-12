import PackModeCard from "../components/PackModeCard";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemContext from "../context/item.context"
import { mutate } from "swr";
import axios from "axios";

const API_URL = "http://localhost:5005";


const listType = "topack";

function PackModePage() {

  const [success, setSuccess] = React.useState(false);

  const { items, error, isLoading } = React.useContext(ItemContext);
  const { tripID } = useParams();
  const theItems = items?.filter((item) => item.trip === tripID && item.listType === listType);

  const navigate = useNavigate();

  function handleItemClick(itemId) {
    const clickedItem = theItems.find((item) => item._id === itemId);

    if (clickedItem) {
      const toggledStatus = !clickedItem.done;

      const storedToken = localStorage.getItem('authToken');
      const requestBody = { done: toggledStatus };
      axios
        .put(
          `${API_URL}/api/items/${itemId}`,
          requestBody,
          { headers: { Authorization: `Bearer ${storedToken}` } }
        )
        .then(() => {
          mutate(`${API_URL}/api/items`);
          const allDone = theItems.every(item => item._id === itemId ? toggledStatus : item.done);
          setSuccess(allDone);
        })
        .catch((error) => console.log(error));
    } else {
      console.error("Item not found");
    }
    console.log('success:', success);
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl my-8">Packing!</h3>
      {isLoading && <p>Loading list...</p>}
      {error && <p>Failed to load list.</p>}
      {theItems?.map((item) => <PackModeCard key={item._id} item={item} onClick={() => handleItemClick(item._id)} />)}
    </div>
  );
}

export default PackModePage;

// add back button

// add success state that enables navigate to success page

// navigate(`/trips/${tripID}/lists/success`);

//return theItems.every(item => item.done);
