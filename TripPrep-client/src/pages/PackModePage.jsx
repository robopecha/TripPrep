import PackModeCard from "../components/PackModeCard";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TripContext from "../context/trip.context"
import ItemContext from "../context/item.context"


const listType = "topack";

function PackModePage() {

  const { items, error: itemsError, isLoading: itemsLoading } = React.useContext(ItemContext);
  // const { trips, error: tripsError, isLoading: tripsLoading } = React.useContext(TripContext);

  const {tripID} = useParams();
  // const theTrip = trips.filter(trip => trip._id === tripID)

  // const [tripPacked, setTripPacked] = React.useState(theTrip.packed);


  // setTripPacked(items.every(item => item.done === true));   -> in PackModeCard ?


  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl my-8">Packing!</h3>
      {itemsLoading && <p>Loading list...</p>}
      {itemsError && <p>Failed to load list.</p>}
      { items?.map((item) => {
        if (item.trip === tripID && item.listType === listType) {
          return <PackModeCard key={item._id} item={item} />
        }
        return null;
      })}
    </div>
  );
}

export default PackModePage;

// add back button
