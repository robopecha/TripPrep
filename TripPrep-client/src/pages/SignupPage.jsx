import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:5005";


function SignupPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

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
    <div>
      <h1 className="text-4xl my-6">Sign Up</h1>

      <label>Username:</label>
        <input
          type="text"
          name="name"
          value={name}
          className="border border-black rounded-sm w-60 h-9"
          onChange={handleName}
        />

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          className="border border-black rounded-sm w-60 h-9"
          onChange={handleEmail}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          className="border border-black rounded-sm w-60 h-9"
          onChange={handlePassword}
        />

        <br />
        <br />
        <button type="submit" className="bg-blue-500 mb-10 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have an account?</p>
      <Link to={"/login"}> Log in</Link>
    </div>
  )
}

export default SignupPage;
