import AllTripsCard from "../components/AllTripsCard";
import TripContext from "../context/trip.context"
import { useContext } from "react";
import SearchForm from "../components/SearchForm";


function SearchPage() {
  const {trips} = useContext(TripContext);

  <SearchForm />

  return (
    <div>
      <h3 className="text-4xl my-10">Search results</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {trips && trips.map((trip) =>
          <AllTripsCard key={trip._id} {...trip} />
        )}
      </div>
    </div>
  );
}

export default SearchPage;
