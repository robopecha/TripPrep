import React from "react";


function RedButton({ className = '', onClick, children }) {

  return(
    <button
      className={`p-2 text-red-500 bg-white border-2 border-red-500 hover:bg-red-500 hover:text-black hover:border-black transition ease-in-out duration-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}


export default RedButton;
