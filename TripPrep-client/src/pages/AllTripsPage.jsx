import AllTripsCard from "../components/AllTripsCard";
import TripCard from "../components/TripCard";
import BlueButton from "../components/BlueButton";
import TripContext from "../context/trip.context"
import { Link } from "react-router-dom";
import React from "react";
import { AuthContext } from "../context/auth.context";


function AllTripsPage() {

  const { trips, error, isLoading } = React.useContext(TripContext);
  const { user } = React.useContext(AuthContext);

  return (
    <div>
      <h3 className="text-4xl my-6">All Trips</h3>
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
