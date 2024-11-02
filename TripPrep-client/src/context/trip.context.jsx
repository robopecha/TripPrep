import React from "react";
import axios from "axios";
import useSWR from 'swr';

const TripContext = React.createContext();
export default TripContext;

const API_URL = "http://localhost:5005";

function fetcher(url) {
  const storedToken = localStorage.getItem("authToken");
  const config = storedToken ? { headers: { Authorization: `Bearer ${storedToken}` } } : {};
  
  return axios
    .get(url, config)
    .then((response) => response.data);
}

export function TripContextProvider(props) {

  const { data: trips, isLoading, error } = useSWR(`${API_URL}/api/trips`, fetcher);

  return (
   <TripContext.Provider value={{ trips, isLoading, error }}>
     {props.children}
   </TripContext.Provider>
  );
}
