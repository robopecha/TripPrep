import React from "react";
import useSWR from 'swr';
import axios from "axios";

const API_URL = "https://tripprep.fly.dev/" || "http://localhost:3000";


const TripContext = React.createContext();
export default TripContext;

function fetcher(url) {

  const storedToken = localStorage.getItem("authToken");
  const config = storedToken ? { headers: { Authorization: `Bearer ${storedToken}` } } : {};

  return axios
    .get(url, config)
    .then((response) => response.data);
}

export function TripContextProvider({ children }) {

  const { data: trips, isLoading, error } = useSWR(`${API_URL}/api/trips`, fetcher);

  return (
   <TripContext.Provider value={{ trips, isLoading, error }}>
     {children}
   </TripContext.Provider>
  );
}
