import { createContext, useState, useEffect } from "react";
import axios from "axios";

const TripContext = createContext(null);
export default TripContext;

const API_URL = "http://localhost:5005";
export const TripContextProvider = (props) => {


  const [trips, setTrips] = useState([]);

  console.log("something is happening")

 useEffect(() => {
    console.log("the function is running!!!")
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(
      `${API_URL}/api/trips`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => {
        console.log("the response", response.data)
        setTrips(response.data)})
      .catch((error) => console.log(error));
  }, []);


 return (
   <TripContext.Provider value={{trips}}>
     {props.children}
   </TripContext.Provider>
 );
};
