import React from "react";
import { Link } from "react-router-dom";


function ListLink({ tripID, linkType, className = '', children }) {

  return (
    <Link to={`/trips/${tripID}/lists/to${linkType}`}
      className={`mx-12 mt-9 text-xl text-yellow-400 hover:text-black transition ease-in-out duration-200 ${className}`}
    >
      {children}
    </Link>
  )
}


export default ListLink;
