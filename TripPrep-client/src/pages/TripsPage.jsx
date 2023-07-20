import TripCard from "../components/TripCard";
import { useContext } from "react";
import TripContext from "../context/trip.context"


function TripPage() {
  const {trips} = useContext(TripContext);

  return (
    <div>
      <h3>My Trips</h3>
      {trips && trips.map((trip) => (
        <TripCard key={trip._id} {...trip} />
      ))}
    </div>
  );
}

export default TripPage;
