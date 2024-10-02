import { useState, useEffect } from 'react';
import AllTripsCard from '../components/AllTripsCard';
import TripCard from "../components/TripCard";
import SearchForm from '../components/SearchForm';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

const SearchPage = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
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

  const fetchAllTrips = async () => {
    const storedToken = localStorage.getItem("authToken");
    try {
      const response = await axios.get(`${API_URL}/api/trips`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });
      setTrips(response.data);
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

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
      <div className="mt-10">
        <SearchForm handleSearch={handleSearch} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredTrips.map(trip => trip.user === user._id ? <TripCard key={trip._id} {...trip} /> : <AllTripsCard key={trip._id} {...trip} />)}
      </div>
    </div>
  );
};

export default SearchPage;
