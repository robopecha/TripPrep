import TripInfo from "../components/TripInfo";
import Header from "../components/Header";
import PackModeCard from "../components/PackModeCard";
import ListDoneToggle from "../components/ListDoneToggle";
import React from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../context/item.context";


const listType = "pack";

function PackModePage() {

  const { tripID } = useParams();
  const { items, error, isLoading } = React.useContext(ItemContext);
  const theItems = items?.filter((item) => item.trip === tripID && item.listType === listType);

  return (
    <div className="flex flex-col items-center">
      <TripInfo tripID={tripID} />
      <Header>Packing!</Header>
      {isLoading && <p>Loading list...</p>}
      {error && <p>Failed to load list.</p>}
      {theItems?.map((item) => <PackModeCard key={item._id} item={item} />)}
      <ListDoneToggle listType={listType}>Everything is packed!</ListDoneToggle>
    </div>
  );
}


export default PackModePage;

// add back button
