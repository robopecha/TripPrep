import { useState, useEffect } from "react";

import AddTripForm from "../components/AddTripForm";


function NewTripPage() {

  return (
    <>
     <h3>Add a new trip</h3>
     <AddTripForm />
    </>
  );
}

export default NewTripPage;
