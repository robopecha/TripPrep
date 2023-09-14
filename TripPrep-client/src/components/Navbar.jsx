import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser, AiOutlineLogin, AiOutlineInfoCircle } from 'react-icons/ai';
import { PiSuitcase } from 'react-icons/pi';


function Navbar() {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-red-500 text-lg py-3">

          <NavLink to="/">
            <div className="flex flex-row items-center">
              <div className="ml-3 text-3xl bg-yellow-400 rounded-full w-10 h-10 flex justify-center items-center">
                <PiSuitcase />
              </div>
              <span className="text-xl ml-2">TripPrep</span>
            </div>
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
            <AiOutlineInfoCircle className="md:hidden text-2xl mr-3"/>
          </NavLink>


        <div className="hidden md:flex justify-between gap-12 mx-3">

          <NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
            <span>About</span>
          </NavLink>

          <NavLink to="/search" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
            <span>Search</span>
          </NavLink>

          {isLoggedIn && (
            <>
              <NavLink to="/trips" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
                <span>My Trips</span>
              </NavLink>

              <NavLink to="/settings" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
                <span>{user.name}</span>
              </NavLink>
            </>
          )}

          {!isLoggedIn && (
              <NavLink to="/login" className={({ isActive }) => isActive ? "text-white mr-3" : "hover:text-yellow-300 transition ease-in-out duration-100 mr-3"}>Log in</NavLink>
          )}
        </div>
      </nav>



      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center bg-red-500 text-3xl py-4">

        <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
          <AiOutlineHome />
        </NavLink>

        <NavLink to="/search" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
          <AiOutlineSearch />
        </NavLink>

        {isLoggedIn && (
          <>
            <NavLink to="/trips" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
              <PiSuitcase className="text-[2.1rem]" />
            </NavLink>

            <NavLink to="/settings" className={({ isActive }) => isActive ? "text-white" : "hover:text-yellow-300 transition ease-in-out duration-100"}>
              <AiOutlineUser />
            </NavLink>
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
