import Header from "../components/Header";
import BlueButton from "../components/BlueButton";
import TripCard from "../components/TripCard";
import AllTripsCard from "../components/AllTripsCard";
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import TripContext from "../context/trip.context"


function AllTripsPage() {

  const { trips, error, isLoading } = React.useContext(TripContext);
  const { user } = React.useContext(AuthContext);

  return (
    <div>
      <Header>All Trips</Header>
      <Link to={`/new-trip`}><BlueButton className="mb-10">Add a trip</BlueButton></Link>
      {isLoading && <p>Loading trips...</p>}
      {error && <p>Failed to load trips.</p>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {trips?.map(trip => trip.user === user?._id ? <TripCard key={trip._id} {...trip} /> : <AllTripsCard key={trip._id} {...trip} />)}
      </div>
    </div>
  );
}


export default AllTripsPage;


// trip.packed === true (&& trip.public === true)
