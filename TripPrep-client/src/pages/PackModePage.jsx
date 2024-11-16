import PackModeCard from "../components/PackModeCard";
import ListDoneToggle from "../components/ListDoneToggle";
import React from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../context/item.context";


const listType = "pack";

function PackModePage() {

  const { items, error: itemsError, isLoading: itemsLoading } = React.useContext(ItemContext);
  const { tripID } = useParams();
  const theItems = items?.filter((item) => item.trip === tripID && item.listType === listType);

  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-4xl my-8">Packing!</h3>
        {itemsLoading && <p>Loading list...</p>}
        {itemsError && <p>Failed to load list.</p>}
        {theItems?.map((item) => <PackModeCard key={item._id} item={item} />)}
        <ListDoneToggle listType={listType}>Everything is packed!</ListDoneToggle>
      </div>
    </div>
  );
}

export default PackModePage;

// add back button
