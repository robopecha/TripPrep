import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai';
import { PiSuitcase } from 'react-icons/pi';


function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-red-500 text-lg py-3">
        <NavLink to="/" >
          <div className="flex flex-row items-center justify-center">
            <div className="ml-3 text-3xl bg-yellow-400 rounded-full w-10 h-10 flex justify-center items-center">
              <PiSuitcase />
            </div>
            <span className="text-xl ml-2">TripPrep</span>
          </div>
        </NavLink>

        <div className="hidden sm:flex justify-between gap-12">
          <NavLink to="/search" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
            <span>Search</span>
          </NavLink>

          {isLoggedIn && (
            <>
              <NavLink to="/trips" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
                <span>My Trips</span>
              </NavLink>

              <div className="relative">
                <span onClick={toggleDropdown} className={isDropdownOpen ? "text-white cursor-pointer mr-3" : "hover:text-yellow-300 transition ease-in-out duration-100 cursor-pointer mr-3"}>{user.name}</span>
                {isDropdownOpen && (
                  <ul className="absolute top-9 right-0 bg-white text-black py-2 px-4 rounded-sm shadow">
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
              <NavLink to="/login" className={({ isActive }) => isActive ? "text-white mr-3" : "hover:text-yellow-300 transition ease-in-out duration-100 mr-3"}>Log in</NavLink>
          )}
        </div>
      </nav>



      <nav className="sm:hidden fixed bottom-0 left-0 w-full flex justify-around items-center bg-red-500 text-3xl py-4">

        <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
          <AiOutlineHome />
        </NavLink>

        <NavLink to="/search" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
        <AiOutlineSearch />
        </NavLink>

        {isLoggedIn && (
          <>
            <NavLink to="/trips" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
              <PiSuitcase />
            </NavLink>

            <div className="relative">
              <AiOutlineUser onClick={toggleDropdown} className={isDropdownOpen ? "text-white cursor-pointer" : "hover:text-yellow-300 transition ease-in-out duration-100 cursor-pointer"} />
              {isDropdownOpen && (
                <ul className="absolute bottom-9 right-0 bg-white text-black py-2 px-4 rounded-sm shadow">
                  <li>
                    <Link to="/settings" className="hover:text-black text-yellow-300 transition ease-in-out duration-100 text-xl">Settings</Link>
                  </li>
                  <li>
                    <button onClick={logOutUser} className="hover:text-black text-yellow-300 transition ease-in-out duration-100 text-xl">Log out</button>
                  </li>
                </ul>
              )}
            </div>
          </>
        )}

        {!isLoggedIn && (
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
              <AiOutlineLogin />
            </NavLink>
        )}

      </nav>
    </>
  );
}

export default Navbar;
