import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


const AuthContext = React.createContext();

function AuthProviderWrapper({ children }) {

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
    navigate('/main');
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
      {children}
    </AuthContext.Provider>
  )
}


export { AuthProviderWrapper, AuthContext };
