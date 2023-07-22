import TripCard from "../components/TripCard";
import TripContext from "../context/trip.context"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


function MyTripsPage() {
  const { user } = useContext(AuthContext);
  const {trips} = useContext(TripContext);
  return (
    <div>
      <h3>My Trips</h3>
      <Link to={`/new-trip`}><button>Add a Trip</button></Link>
      {trips && trips.map((trip) => {
        if (trip.user === user._id) {
          return <TripCard key={trip._id} {...trip} />;
        }
      })}
    </div>
  );
}

export default MyTripsPage;
