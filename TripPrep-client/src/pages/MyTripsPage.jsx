import Header from "../components/Header";
import BlueButton from "../components/BlueButton";
import TripCard from "../components/TripCard";
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { TripContext } from "../context/TripProvider"


function MyTripsPage() {

  const { user } = React.useContext(AuthContext);
  const { trips, error, isLoading } = React.useContext(TripContext);
  const myTrips = trips?.filter((trip) => trip.user === user._id);

  return (
    <div>
      <Header>My Trips</Header>
      <Link to={`/new-trip`}><BlueButton className="mb-10">Add a trip</BlueButton></Link>
      {isLoading && <p>Loading trips...</p>}
      {error && <p>Failed to load trips.</p>}
      {!isLoading && !error && !myTrips && <p>Trips not found.</p>}
      {!isLoading && !error && myTrips && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {myTrips.map((trip) => <TripCard key={trip._id} trip={trip} />)}
        </div>
      )}
    </div>
  );
}


export default MyTripsPage;
