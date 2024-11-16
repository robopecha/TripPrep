import Header from "../components/Header";
import EditTripForm from "../components/AddTripForm";
import RedButton from "../components/RedButton";
import React from "react";


function MyTripEditPage() {

  return (
    <div className="text-center">
      <Header>Edit my Trip</Header>
      <EditTripForm />
      <RedButton className="mt-20 text-sm">Delete trip</RedButton>
    </div>
  );
}


export default MyTripEditPage;


// add delete button

// add public/private toggle button
