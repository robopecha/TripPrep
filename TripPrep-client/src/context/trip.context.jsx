import { createContext, useState, useEffect } from "react";
import axios from "axios";

const TripContext = createContext(null);
export default TripContext;

const API_URL = "http://localhost:5005";

export const TripContextProvider = (props) => {


  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(
      `${API_URL}/api/trips`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => {
        setTrips(response.data)})
      .catch((error) => console.log(error));
  }, []);


  return (
   <TripContext.Provider value={{trips}}>
     {props.children}
   </TripContext.Provider>
  );
};
