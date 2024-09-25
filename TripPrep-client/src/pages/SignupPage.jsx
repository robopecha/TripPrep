import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:5005";


function SignupPage(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(undefined);

  const id = React.useId();

  const usernameId = `${id}-username`;
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);


  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, email, password };

    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };


  return (
    <div className="text-center">
      <h1 className="text-4xl my-6">Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <div className="mb-5">
          <label htmlFor={usernameId}>Username:</label>
          <input
            id={usernameId}
            type="text"
            name="name"
            value={name}
            className="border border-black rounded-sm w-80 h-10"
            onChange={handleName}
          />
        </div>

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

        <button type="submit" className="bg-blue-500 mb-10 p-2 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p className="my-3">Already have an account?</p>
      <Link to={"/login"} className="text-blue-600 p-2 rounded-sm hover:bg-blue-500 hover:text-black transition ease-in-out duration-200"> Log in</Link>
    </div>
  )
}

export default SignupPage;
