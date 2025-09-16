import Header from "../components/Header";
import Button from "../components/Button";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


function SignupPage() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(undefined);

  const id = React.useId();
  const usernameId = `${id}-username`;
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  const navigate = useNavigate();

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSignupSubmit(event) {

    event.preventDefault();

    const requestBody = { name, email, password };

    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }

  return (
    <div className="text-center">
      <Header>Sign up</Header>
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

        <Button type="submit" className="blue-button mb-10">Sign up</Button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p className="my-3">Already have an account?</p>
      <Link to={"/login"} className="text-blue-600 py-3 px-2 rounded-sm hover:bg-blue-500 hover:text-black transition ease-in-out duration-200"> Log in</Link>
    </div>
  )
}


export default SignupPage;
