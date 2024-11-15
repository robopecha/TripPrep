import React from 'react';


function Header({ className = '', children }) {

  return (
    <h3 className={`text-4xl my-6 ${className}`}>{ children }</h3>
  )
}


export default Header;


/* <h3 className="text-4xl my-8">Packing!</h3>

<h3 className="text-4xl my-6">About</h3>

<h3 className="text-4xl my-6 text-center mt-10">To Buy</h3>

<h3 className="text-4xl my-6 text-center mt-10">To Do</h3>

<h3 className="text-4xl my-6 text-center mt-10">To Pack</h3>

<h1 className="text-4xl my-6">Log in</h1>

<h1 className="text-4xl my-6">Sign Up</h1>

<h3 className="text-4xl mt-10 mb-6 mt-15">{theTrip?.destination}</h3>

<h3 className="text-4xl my-6">Edit my trip</h3>

<h3 className="text-4xl my-6">My Trips</h3>

<h3 className="text-4xl my-6">Add a new trip</h3> */
