import React from "react";
import axios from "axios";
import useSWR from 'swr';

const ItemContext = React.createContext();
export default ItemContext;

const API_URL = "http://localhost:5005";

function fetcher(url) {
  
  const storedToken = localStorage.getItem("authToken");
  const config = storedToken ? { headers: { Authorization: `Bearer ${storedToken}` } } : {};

  return axios
    .get(url, config)
    .then((response) => response.data);
}

export function ItemContextProvider(props) {

  const { data: items, isLoading, error } = useSWR(`${API_URL}/api/items`, fetcher);

  return (
   <ItemContext.Provider value={{ items, isLoading, error }}>
     {props.children}
   </ItemContext.Provider>
  );
}
