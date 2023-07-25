import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="fixed top-0 left-0 w-full py-3 flex justify-around items-center bg-red-500 text-lg rounded-sm mb-0">
      <NavLink to="/alltrips" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
        <span>Home</span>
      </NavLink>

      <NavLink to="/search" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
        <span>Search</span>
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink to="/trips" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
          <span>My Trips</span>
          </NavLink>

          <NavLink to="/profile" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>{user.name}</NavLink>

          <button onClick={logOutUser} className="hover:text-yellow-300 transition ease-in-out duration-100">Log out</button>
        </>
      )}

      {!isLoggedIn && (
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>Log in</NavLink>
      )}

    </nav>
  );
}

export default Navbar;
