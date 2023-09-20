import ListCard from "../components/ListCard";
import { useParams, Link } from "react-router-dom";
import { useContext} from "react";
import TripContext from "../context/trip.context";


function MyTripDetailsPage() {
  const {trips} = useContext(TripContext);
  const {tripID} = useParams();

  const theTrip = trips.filter(trip => trip._id === tripID);

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl mt-10 mb-6 mt-15">{theTrip[0]?.destination}</h3>
      <h3 className="text-2xl my-6">{theTrip[0]?.country}</h3>
      <ListCard {...theTrip[0]}/>
      <h3 className="text-2xl my-6">{theTrip[0]?.season}</h3>
      <h3 className="text-xl mt-8">starting on:</h3>
      <h3 className="text-2xl mt-3">{theTrip[0]?.startDate.slice(5, 7)}-{theTrip[0]?.startDate.slice(8, 10)}-{theTrip[0]?.startDate.slice(0, 4)}</h3>
      <Link to={`/trips/${tripID}/edit`}><button className="text-lg bg-blue-500 p-2 mb-10 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 mt-10">Edit Trip</button></Link>
    </div>
  );
}

// add back button

export default MyTripDetailsPage;
