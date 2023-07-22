import AllTripsCard from "../components/AllTripsCard";
import TripContext from "../context/trip.context"
import { Link } from "react-router-dom";
import { useContext } from "react";


function AllTripsPage() {
  const {trips} = useContext(TripContext);
  return (
    <div>
      <h3>All Trips</h3>
      <Link to={`/new-trip`}><button>Add a Trip</button></Link>
      {trips && trips.map((trip) =>
        <AllTripsCard key={trip._id} {...trip} />
      )}
    </div>
  );
}

export default AllTripsPage;
