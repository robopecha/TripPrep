import React from "react";
import { Link } from "react-router-dom";


function ListLink({ tripID, linkType, children }) {

  return (
    <Link to={`/trips/${tripID}/lists/to${linkType}`}
      className="mx-12 mt-10 text-xl text-yellow-400 hover:text-black transition ease-in-out duration-200"
    >
      {children}
    </Link>
  )
}


export default ListLink;
