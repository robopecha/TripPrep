import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { RiSuitcaseLine } from 'react-icons/ri';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-red-500 text-lg rounded-sm py-1">
      <NavLink to="/" >
        <div className="flex flex-row items-center justify-center">
          <div className="ml-4 text-2xl bg-yellow-400 rounded-full w-10 h-10 flex justify-center items-center">
            <RiSuitcaseLine />
          </div>
          <span className="text-xl ml-2">TripPrep</span>
        </div>
      </NavLink>

      <NavLink to="/search" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
        <span>Search</span>
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink to="/trips" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
            <span>My Trips</span>
          </NavLink>

          <div className="relative">
            <span onClick={toggleDropdown} className={isDropdownOpen ? "text-white cursor-pointer mr-5" : "hover:text-yellow-300 transition ease-in-out duration-100 cursor-pointer mr-5"}>{user.name}</span>
            {isDropdownOpen && (
              <ul className="absolute top-12 right-0 bg-white text-black py-2 px-4 rounded-sm shadow">
                <li>
                  <Link to="/settings" className="hover:text-black text-yellow-300 transition ease-in-out duration-100">Settings</Link>
                </li>
                <li>
                  <button onClick={logOutUser} className="hover:text-black text-yellow-300 transition ease-in-out duration-100">Log out</button>
                </li>
              </ul>
            )}
          </div>
        </>
      )}

      {!isLoggedIn && (
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-white mr-5" : "hover:text-yellow-300 transition ease-in-out duration-100 mr-5"}>Log in</NavLink>
      )}
    </nav>
  );
}

export default Navbar;
