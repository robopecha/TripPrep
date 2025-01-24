import Header from "../components/Header";
import ShowPackCard from "../components/ShowPackCard";
import React from "react";
import { useParams } from "react-router-dom";
import { TripContext } from "../context/trip.context";
import { ItemContext } from "../context/item.context"


const listType = "pack";

function ShowPackListPage() {

  const { tripID } = useParams();
  const { trips, error: tripsError, isLoading: tripsLoading } = React.useContext(TripContext);
  const theTrip = trips?.find((trip) => trip._id === tripID);

  const { items, error: itemsError, isLoading: itemsLoading } = React.useContext(ItemContext);
  const theItems = items?.filter((item) => tripID === item.trip && item.listType === listType);

  return (
    <div className="flex flex-col items-center">
      {tripsLoading && <p>Loading trip title...</p>}
      {tripsError && <p>Failed to load trip title.</p>}
      {!tripsLoading && !tripsError && !theTrip && <p>Trip title not found.</p>}
      {!tripsLoading && !tripsError && theTrip && (
        <Header>{theTrip.destination}, {theTrip.country} in {theTrip.season}</Header>
      )}
      {itemsLoading && <p>Loading list...</p>}
      {itemsError && <p>Failed to load list.</p>}
      {!itemsLoading && !itemsError && !theItems && <p>List not found.</p>}
      {!itemsLoading && !itemsError && theItems && (
        <>
          {theItems.map((item) => <ShowPackCard key={item._id} item={item} />)}
          {theItems.length === 0 && <p className={'text-sm mt-7'}>This packing list is empty right now.</p>}
        </>
      )}
    </div>
  );
}


export default ShowPackListPage;

// add user:
// {theItems?.length !== 0 ? <p className={'text-sm mt-7'}>Packing list by {user?.name}</p> : <p className={'text-sm mt-7'}>This packing list has no items anymore.</p>}
