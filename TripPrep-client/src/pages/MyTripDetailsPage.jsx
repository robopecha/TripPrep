import ListCard from "../components/ListCard";
import { useParams } from "react-router-dom";
import { useContext} from "react";
import TripContext from "../context/trip.context"

function MyTripDetailsPage() {
  const {trips} = useContext(TripContext);
  const {tripID} = useParams();

  const theTrip = trips.filter(trip => trip._id === tripID);
  console.log('this is it: ', theTrip);

  return (
    <>
     <h3 className="text-4xl mt-10 mb-6 text-center mt-15">{theTrip[0]?.destination}</h3>
     <h3 className="text-2xl my-6 text-center">{theTrip[0]?.country}</h3>
     <ListCard {...theTrip[0]}/>
     <h3 className="text-2xl my-6 text-center">{theTrip[0]?.season}</h3>
     <h3 className="text-xl mt-10 text-center">starting on:</h3>
     <h3 className="text-2xl mt-3 text-center">{theTrip[0]?.startDate.slice(8, 10)}-{theTrip[0]?.startDate.slice(5, 7)}-{theTrip[0]?.startDate.slice(0, 4)}</h3>
    </>
  );
}

// add back button
// add edit option

export default MyTripDetailsPage;
