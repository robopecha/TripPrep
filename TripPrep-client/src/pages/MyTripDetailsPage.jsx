import ListCard from "../components/ListCard";
import { useParams } from "react-router-dom";
import { useContext} from "react";
import TripContext from "../context/trip.context"

function MyTripDetailsPage() {
  const {trips} = useContext(TripContext);
  const {tripID} = useParams();

  console.log('trips', trips);

  const theTrip = trips.filter(trip => trip._id === tripID)

  console.log('thetrip', theTrip);

  return (
    <>
     <h3 className="text-4xl my-6 text-center mt-15">{theTrip[0]?.destination}</h3>
     <h3 className="text-2xl my-6 text-center">{theTrip[0]?.country}</h3>
     <h3 className="text-2xl my-6 text-center">{theTrip[0]?.season}</h3>
     <ListCard {...theTrip[0]}/>
     <h3 className="text-2xl mt-16 text-center">{theTrip[0]?.startDate}</h3>
    </>
  );
}

// add edit option and image upload option

export default MyTripDetailsPage;
