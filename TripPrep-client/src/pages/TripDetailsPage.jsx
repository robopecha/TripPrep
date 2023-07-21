import ListCard from "../components/ListCard";
import { useParams } from "react-router-dom";
import { useContext} from "react";
import TripContext from "../context/trip.context"

function TripDetailsPage() {
  const {trips} = useContext(TripContext);
  const {tripID} = useParams();

  const theTrip = trips.filter(trip => trip._id === tripID)
  return (
    <>
     <h3>{theTrip.destination}</h3>
     <ListCard {...theTrip[0]}/>
    </>
  );
}

export default TripDetailsPage;
