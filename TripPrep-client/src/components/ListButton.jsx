import React from "react";
import { Link } from "react-router-dom";


function ListButton({ to, className = '', children }) {

  return (
    <Link to={to}>
      <button className={`rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center w-60 py-2 my-2 text-xl ${className}`}>
        {children}
      </button>
    </Link>
  )
}


export default ListButton;
