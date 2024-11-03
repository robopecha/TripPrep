import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  function storeToken(token) {
    localStorage.setItem('authToken', token);
  }

  const navigate = useNavigate();

  function authenticateUser() {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      axios.get(
        `${API_URL}/auth/verify`,
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => {
        const user = response.data;
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);
      })
      .catch((error) => {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
      });
    } else {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
    }
  }

  function removeToken() {
    localStorage.removeItem("authToken");
  }

  function logOutUser() {
    removeToken();
    authenticateUser();
    navigate('/');
  }

  React.useEffect(() => {
    authenticateUser();
   }, []);


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
