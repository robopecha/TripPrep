import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";


function IsAnon( { children } ) {

  const { isLoggedIn, isLoading } = React.useContext(AuthContext);

  if (isLoading) return <p>Loading ...</p>;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}


export default IsAnon;
