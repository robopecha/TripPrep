import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  console.log(isLoggedIn);

  return (
    <nav>
      <Link to="/"><button>Home</button></Link>

      <Link to="/search"><button>Search</button></Link>

      {isLoggedIn && (
        <>
          <Link to="/trips"><button>Trips</button></Link>

          <Link to="/messages"><button>Messages</button></Link>

          <Link to="/profile"><button>Profile</button></Link>
        </>
      )}

      {!isLoggedIn && (
          <Link to="/login"> <button>Login</button> </Link>
      )}

    </nav>
  );
}

export default Navbar;
