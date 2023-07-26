import AllTripsCard from "../components/AllTripsCard";
import TripCard from "../components/TripCard";
import TripContext from "../context/trip.context"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function AllTripsPage() {
  const {trips} = useContext(TripContext);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3 className="text-4xl my-6">All Trips</h3>
      <Link to={`/new-trip`}><button className="bg-blue-500 p-2 mb-10 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200">Add a Trip</button></Link>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {trips && trips.map(trip => trip.user === user._id ? <TripCard key={trip._id} {...trip} /> : <AllTripsCard key={trip._id} {...trip} />)}
      </div>
    </div>
  );
}

export default AllTripsPage;


// trip.packed === true && trip.public === true
