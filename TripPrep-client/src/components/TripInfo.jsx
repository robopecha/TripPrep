import React from "react";
import TripContext from "../context/trip.context";


function TripInfo({ tripID }) {

  const { trips, error, isLoading } = React.useContext(TripContext);
  const theTrip = trips?.find(trip => trip._id === tripID);

  return (
    <p className={'text-sm my-4'}>{theTrip?.destination}, {theTrip?.country} in {theTrip?.season}</p>
  )
}


export default TripInfo;
