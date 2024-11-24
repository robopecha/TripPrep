import React from "react";
import useSWR from 'swr';
import axios from "axios";

const API_URL = "https://tripprep.fly.dev/" || "http://localhost:3000";


const ItemContext = React.createContext();
export default ItemContext;

function fetcher(url) {

  const storedToken = localStorage.getItem("authToken");
  const config = storedToken ? { headers: { Authorization: `Bearer ${storedToken}` } } : {};

  return axios
    .get(url, config)
    .then((response) => response.data);
}

export function ItemContextProvider({ children }) {

  const { data: items, isLoading, error } = useSWR(`${API_URL}/api/items`, fetcher);

  return (
   <ItemContext.Provider value={{ items, isLoading, error }}>
    {children}
   </ItemContext.Provider>
  )
}
