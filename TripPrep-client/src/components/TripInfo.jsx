import React from "react";
import { Link } from "react-router-dom";
import TripContext from "../context/trip.context";


function TripInfo({ tripID }) {

  const { trips, error, isLoading } = React.useContext(TripContext);
  const theTrip = trips?.find(trip => trip._id === tripID);

  return (
    <Link to={`/trips/${tripID}`}><p className={'text-sm my-4 hover:text-blue-500 cursor-pointer'}>{theTrip?.destination}, {theTrip?.country} in {theTrip?.season}</p></Link>
  )
}


export default React.memo(TripInfo);
