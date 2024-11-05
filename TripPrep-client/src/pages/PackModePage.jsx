import PackModeCard from "../components/PackModeCard";
import React from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../context/item.context"


const listType = "topack";

function PackModePage() {

  const { tripID } = useParams();
  const { items, error, isLoading } = React.useContext(ItemContext);

  const theItems = items?.filter((item) => item.trip === tripID && item.listType === listType);
  console.log({theItems});  // √

  function packedCheck() {
    let doneItems = theItems.filter((item) => item.done);
    console.log('items:', theItems.length, 'done:', doneItems.length);
    return doneItems.length === theItems.length;
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl my-8">Packing!</h3>
      {isLoading && <p>Loading list...</p>}
      {error && <p>Failed to load list.</p>}
      {theItems?.map((item) => <PackModeCard key={item._id} item={item} packedCheck={packedCheck} />)}
    </div>
  );
}

export default PackModePage;

// add back button


//return theItems.every(item => item.done);
