import Header from "../components/Header";
import ShowPackCard from "../components/ShowPackCard";
import React from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../context/item.context"
import TripContext from "../context/trip.context";


const listType = "pack";

function ShowPackListPage() {

  const { tripID } = useParams();
  const { items, error: itemsError, isLoading: itemsLoading } = React.useContext(ItemContext);
  const theItems = items?.filter((item) => tripID === item.trip && item.listType === listType);

  const { trips, error: tripsError, isLoading: tripsLoading } = React.useContext(TripContext);
  const theTrip = trips?.find((trip) => trip._id === tripID);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around">
      <Header>{theTrip?.destination}, {theTrip?.country} in {theTrip?.season}</Header>
      </div>
      {itemsLoading && <p>Loading list...</p>}
      {itemsError && <p>Failed to load list.</p>}
      <div>
        {theItems?.map((item) => <ShowPackCard key={item?._id} item={item} />)}
        {theItems?.length === 0 && <p className={'text-sm mt-7'}>This packing list is empty now.</p>}
      </div>
    </div>
  );
}


export default ShowPackListPage;

// add user:
// {theItems?.length !== 0 ? <p className={'text-sm mt-7'}>Packing list by {user?.name}</p> : <p className={'text-sm mt-7'}>This packing list has no items anymore.</p>}
