import TripCard from "../components/TripCard";
import TripContext from "../context/trip.context"
import { Link } from "react-router-dom";
import { useContext } from "react";


function TripPage() {
  const {trips} = useContext(TripContext);
  return (
    <div>
      <h3>My Trips</h3>
      <Link to={`/new-trip`}>Add a Trip</Link>
      {trips && trips.map((trip) => (
        <TripCard key={trip._id} {...trip} />
      ))}
    </div>
  );
}

export default TripPage;
