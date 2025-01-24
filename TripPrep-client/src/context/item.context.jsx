import React from "react";
import useSWR from 'swr';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


const ItemContext = React.createContext();

function fetcher(url) {

  const storedToken = localStorage.getItem("authToken");
  const config = storedToken ? { headers: { Authorization: `Bearer ${storedToken}` } } : {};

  return axios
    .get(url, config)
    .then((response) => response.data);
}

function ItemProvider({ children }) {

  const { data: items, isLoading, error } = useSWR(`${API_URL}/api/items`, fetcher);

  return (
   <ItemContext.Provider value={{ items, isLoading, error }}>
    {children}
   </ItemContext.Provider>
  )
}


export { ItemContext, ItemProvider };
