import Header from "../components/Header";
import Button from "../components/Button";
import React from "react";
import { AuthContext } from "../context/AuthProvider";


function SettingsPage() {

  const { logOutUser } = React.useContext(AuthContext);

  return (
    <>
      <Header>Settings</Header>
      <Button className="red-button ml-0.5" onClick={logOutUser}>Log out</Button>
    </>
  );
}


export default SettingsPage;


// dark mode

// delete account
