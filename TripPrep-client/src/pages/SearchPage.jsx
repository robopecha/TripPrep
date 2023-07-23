import AllTripsCard from "../components/AllTripsCard";
import TripContext from "../context/trip.context"
import { useContext } from "react";
import SearchForm from "../components/SearchForm";


function SearchPage() {
  const {trips} = useContext(TripContext);

  <SearchForm />

  return (
    <div>
      <h3>Search results</h3>
      {trips && trips.map((trip) =>
        <AllTripsCard key={trip._id} {...trip} />
      )}
    </div>
  );
}

export default SearchPage;
