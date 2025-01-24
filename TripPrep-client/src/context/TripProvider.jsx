import React from "react";
import useSWR from 'swr';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


const TripContext = React.createContext();

function fetcher(url) {
  const storedToken = localStorage.getItem("authToken");
  const config = storedToken ? { headers: { Authorization: `Bearer ${storedToken}` } } : {};

  return axios
    .get(url, config)
    .then((response) => response.data);
}

function TripProvider({ children }) {

  const { data: trips, isLoading, error } = useSWR(`${API_URL}/api/trips`, fetcher);

  return (
   <TripContext.Provider value={{ trips, isLoading, error }}>
     {children}
   </TripContext.Provider>
  );
}


export { TripContext, TripProvider };
