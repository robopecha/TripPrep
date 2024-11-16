import Header from "../components/Header";
import ListsCard from "../components/ListsCard";
import BlueButton from "../components/BlueButton";
import React from "react";
import { useParams, Link } from "react-router-dom";
import TripContext from "../context/trip.context";


function MyTripDetailsPage() {

  const { trips, error, isLoading } = React.useContext(TripContext);
  const { tripID } = useParams();
  const theTrip = trips?.find(trip => trip._id === tripID);

  return (
    <div className="flex flex-col items-center">
      {isLoading && <p>Loading trip...</p>}
      {error && <p>Failed to load trip.</p>}
      <Header>{theTrip?.destination}</Header>
      <h3 className="text-2xl my-6">{theTrip?.country}</h3>
      <ListsCard theTrip={theTrip} />
      <h3 className="text-2xl my-6">{theTrip?.season}</h3>
      <h3 className="text-xl mt-8">starting on:</h3>
      <h3 className="text-2xl mt-3">{theTrip?.startDate.slice(8, 10)}-{theTrip?.startDate.slice(5, 7)}-{theTrip?.startDate.slice(0, 4)}</h3>
      <Link to={`/trips/${tripID}/edit`}><BlueButton className="text-lg my-10">Edit trip</BlueButton></Link>
    </div>
  );
}


export default MyTripDetailsPage;


// add back button

// import { formatDate } from './date-helpers.js';     <- check this out!  <time dateTime="2024-01-01T00:00:00.000Z"> {formatDate(message.published)} </time>
