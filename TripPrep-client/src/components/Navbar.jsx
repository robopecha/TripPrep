import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="flex justify-between pb-8">
      <Link to="/alltrips"><button>Home</button></Link>

      <Link to="/search"><button>Search</button></Link>

      {isLoggedIn && (
        <>
          <Link to="/trips"><button>My Trips</button></Link>

          <Link to="/profile"><button>{user.name}</button></Link>

          <button onClick={logOutUser}>Log out</button>
        </>
      )}

      {!isLoggedIn && (
          <Link to="/login"> <button>Log in</button> </Link>
      )}

    </nav>
  );
}

export default Navbar;
