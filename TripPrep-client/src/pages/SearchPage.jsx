import Header from "../components/Header";
import SearchForm from '../components/SearchForm';
import TripCard from "../components/TripCard";
import AllTripsCard from '../components/AllTripsCard';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../context/auth.context";
import axios from 'axios';

const API_URL = "http://localhost:5005";


function SearchPage() {

  const location = useLocation();
  const { user } = React.useContext(AuthContext);
  const [trips, setTrips] = React.useState([]);
  const [filteredTrips, setFilteredTrips] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const theTrips = filteredTrips.filter((trip) => trip.public && trip.packDone);

  async function fetchAllTrips() {
    const storedToken = localStorage.getItem("authToken");
    const config = storedToken ? { headers: { Authorization: `Bearer ${storedToken}` } } : {};
    try {
      const response = await axios.get(`${API_URL}/api/trips`, config);
      setTrips(response.data);
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');

    fetchAllTrips();

    if (query) {
      setSearchQuery(query);
      handleSearch(query);
    } else {
      setFilteredTrips(trips);
    }
  }, [location.search]);

  function handleSearch(searchQuery) {
    const filtered = trips.filter((trip) => {
      return (
        trip.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.season.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredTrips(filtered);
  }

  return (
    <div>
      <Header>Search</Header>
      <div>
        <SearchForm handleSearch={handleSearch} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {theTrips.map((trip) => trip.user === user?._id ? <TripCard key={trip._id} trip={trip} /> : <AllTripsCard key={trip._id} trip={trip} />)}
      </div>
    </div>
  );
}


export default SearchPage;
