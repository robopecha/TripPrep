import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://127.0.0.1:5005";


function LoginPage(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(undefined);

  const id = React.useId();

  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = React.useContext(AuthContext);


  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    const requestBody = { email, password };

    axios.post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log('JWT token', response.data.authToken );
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl my-6">Log in</h1>

      <form onSubmit={handleLoginSubmit}>
        <div className="mb-5">
          <label htmlFor={emailId}>Email:</label>
          <input
            id={emailId}
            type="email"
            name="email"
            value={email}
            className="border border-black rounded-sm w-80 h-10"
            onChange={handleEmail}
          />
        </div>

        <div className="mb-5">
          <label htmlFor={passwordId}>Password:</label>
          <input
            id={passwordId}
            type="password"
            name="password"
            value={password}
            className="border border-black rounded-sm w-80 h-10"
            onChange={handlePassword}
          />
        </div>

        <button type="submit" className="bg-blue-500 mb-10 p-2 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200">Log in</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p className="my-3">Don't have an account yet?</p>
      <Link to={"/signup"} className="text-blue-600 p-2 rounded-sm hover:bg-blue-500 hover:text-black transition ease-in-out duration-200"> Sign Up</Link>
    </div>
  )
}

export default LoginPage;
