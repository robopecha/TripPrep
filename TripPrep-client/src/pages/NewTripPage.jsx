import Header from "../components/Header";
import AddTripForm from "../components/AddTripForm";
import React from "react";


function NewTripPage() {

  return (
    <div className="text-center">
      <Header>Add a new Trip</Header>
      <AddTripForm />
    </div>
  );
}


export default NewTripPage;
