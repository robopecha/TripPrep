import { Link } from "react-router-dom";
import React from "react";


function ListsCard({ theTrip }) {

  console.log('trip packed:', theTrip?.packed);

  return (
    <div className="my-10 flex flex-col items-center">
      <Link to={`/trips/${theTrip._id}/lists/todo`}>
        <button className="mb-8 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center w-60 py-2 my-2 text-xl"> To Do </button>
      </Link>
      <Link to={`/trips/${theTrip._id}/lists/tobuy`}>
        <button className="my-10 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center w-60 py-2 my-2 text-xl"> To Buy </button>
      </Link>
      <div className="relative inline-block">
        <Link to={`/trips/${theTrip._id}/lists/topack`}>
          <button className="relative mt-8 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200 bg-yellow-400 text-center w-60 py-2 my-2 text-xl"> To Pack </button>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor"
          className={theTrip.packed ? 'absolute -top-2 left-48 w-24 visible' : 'absolute -top-2 left-48 w-24 invisible'}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
    </div>
  )
}

export default ListsCard;
