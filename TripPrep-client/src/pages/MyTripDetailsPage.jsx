import Header from "../components/Header";
import ListsCard from "../components/ListsCard";
import BlueButton from "../components/BlueButton";
import React from "react";
import { useParams, Link } from "react-router-dom";
import TripContext from "../context/trip.context";


function MyTripDetailsPage() {

  const { trips, error, isLoading } = React.useContext(TripContext);
  const { tripID } = useParams();
  const theTrip = trips?.find((trip) => trip._id === tripID);

  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    dateStyle: "long",
  }).format(new Date(theTrip.startDate));

  return (
    <div className="flex flex-col items-center">
      {isLoading && <p>Loading trip...</p>}
      {error && <p>Failed to load trip.</p>}
      {!isLoading && !error && !theTrip && <p>Trip not found.</p>}
      {!isLoading && !error && theTrip && (
        <>
          <Header>{theTrip.destination}</Header>
          <h3 className="text-2xl">{theTrip.country}</h3>
          <ListsCard trip={theTrip} />
          <h3 className="text-2xl">{theTrip.season}</h3>
          <h3 className="text-xl mt-12">starting on:</h3>
          <h3 className="text-2xl mt-4">{formattedDate}</h3>
          <Link to={`/trips/${tripID}/edit`}>
            <BlueButton className="bg-white !border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black hover:border-white mt-12">
              Edit trip
            </BlueButton>
          </Link>
        </>
      )}
    </div>
  );
}


export default MyTripDetailsPage;
