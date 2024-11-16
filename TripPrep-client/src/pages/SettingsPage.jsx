import Header from "../components/Header";
import React from "react";
import { AuthContext } from "../context/auth.context";


function SettingsPage() {

  const { logOutUser } = React.useContext(AuthContext);

  return (
    <>
      <Header>Settings</Header>
      <button onClick={logOutUser} className="ml-0.5 hover:bg-red-500 hover:text-white text-red-500 border-2 border-red-500 transition ease-in-out duration-100 p-2">
        Log out
      </button>
    </>
  );
}


export default SettingsPage;


// dark mode

// delete account
