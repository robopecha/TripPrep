import TripCard from "../components/TripCard";
import TripContext from "../context/trip.context"
import BlueButton from "../components/BlueButton";
import { Link } from "react-router-dom";
import React from "react";
import { AuthContext } from "../context/auth.context";


function MyTripsPage() {
  const { user } = React.useContext(AuthContext);
  const { trips, error, isLoading } = React.useContext(TripContext);

  return (
    <div>
      <h3 className="text-4xl my-6">My Trips</h3>
      <Link to={`/new-trip`}><BlueButton className="mb-10">Add a trip</BlueButton></Link>
      {isLoading && <p>Loading trips...</p>}
      {error && <p>Failed to load trips.</p>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {trips?.map((trip) => {
          if (trip.user === user._id) {
            return <TripCard key={trip._id} {...trip} />;
          }
        })}
      </div>
    </div>
  );
}

export default MyTripsPage;
