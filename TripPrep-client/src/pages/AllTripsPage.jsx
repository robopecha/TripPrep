import Header from "../components/Header";
import Button from "../components/Button";
import TripCard from "../components/TripCard";
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { TripContext } from "../context/TripProvider"


function AllTripsPage() {

  const { user } = React.useContext(AuthContext);
  const { trips, error, isLoading } = React.useContext(TripContext);
  const theTrips = trips?.filter((trip) => trip.public && trip.packDone);

  return (
    <div>
      <Header>Trips</Header>
      <Link to={'/new-trip'}><Button className="blue-button mb-10">Add a trip</Button></Link>
      {isLoading && <p>Loading trips...</p>}
      {error && <p>Failed to load trips.</p>}
      {!isLoading && !error && !theTrips && <p>Trips not found.</p>}
      {!isLoading && !error && theTrips && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {theTrips.map((trip) => trip.user === user?._id ? <TripCard key={trip._id} trip={trip} to={`/trips/${trip._id}`} /> : <TripCard key={trip._id} trip={trip} to={`/trips/${trip._id}/packlist`} />)}
        </div>
      )}
    </div>
  );
}


export default AllTripsPage;
