import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="text-orange-500">
      <Link to="/alltrips"><button>Home</button></Link>

      <Link to="/search"><button>Search</button></Link>

      {isLoggedIn && (
        <>
          <Link to="/trips"><button>My Trips</button></Link>

          <Link to="/profile"><button>Profile</button></Link>

          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
          <Link to="/login"> <button>Login</button> </Link>
      )}

    </nav>
  );
}

export default Navbar;
