import Header from "../components/Header";
import RedButton from "../components/RedButton";
import React from "react";
import { AuthContext } from "../context/AuthProvider";


function SettingsPage() {

  const { logOutUser } = React.useContext(AuthContext);

  return (
    <>
      <Header>Settings</Header>
      <RedButton className="ml-0.5" onClick={logOutUser}>Log out</RedButton>
    </>
  );
}


export default SettingsPage;


// dark mode

// delete account
