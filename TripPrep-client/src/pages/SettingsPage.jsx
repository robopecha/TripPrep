import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext, useState } from "react";

function SettingsPage() {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <>
      <h3 className="text-4xl my-6">Settings</h3>
      <button onClick={logOutUser} className="hover:bg-red-500 hover:text-white text-red-500 border-2 border-red-500 transition ease-in-out duration-100 p-2">Log out</button>
    </>
  );
}

export default SettingsPage;
