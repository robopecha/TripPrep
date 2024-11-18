import Header from "../components/Header";
import BlueButton from "../components/BlueButton";
import TripCard from "../components/TripCard";
import AllTripsCard from "../components/AllTripsCard";
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import TripContext from "../context/trip.context"


function AllTripsPage() {

  const { user } = React.useContext(AuthContext);
  const { trips, error, isLoading } = React.useContext(TripContext);
  const theTrips = trips?.filter(trip => trip.public && trip.packDone);

  return (
    <div>
      <Header>All Trips</Header>
      <Link to={`/new-trip`}><BlueButton className="mb-10">Add a trip</BlueButton></Link>
      {isLoading && <p>Loading trips...</p>}
      {error && <p>Failed to load trips.</p>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {theTrips.map(trip => trip.user === user?._id ? <TripCard key={trip._id} trip={trip} /> : <AllTripsCard key={trip._id} trip={trip} />)}
      </div>
    </div>
  );
}


export default AllTripsPage;
