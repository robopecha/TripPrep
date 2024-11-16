import { Link } from "react-router-dom";
import React from "react";
import ListButton from "./ListButton";


function ListsCard({ theTrip }) {

  return (
    <div className="my-10 flex flex-col items-center">
      <ListButton to={`/trips/${theTrip?._id}/lists/todo`} className='mb-8'>To Do</ListButton>
      <ListButton to={`/trips/${theTrip?._id}/lists/tobuy`} className='my-10'>To Buy</ListButton>
      <div className="relative inline-block">
        <ListButton to={`/trips/${theTrip?._id}/lists/topack`} className='relative mt-8'>To Pack</ListButton>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor"
          className={theTrip?.packedDone ? 'absolute -top-2 left-48 w-24 visible' : 'absolute -top-2 left-48 w-24 invisible'}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
    </div>
  );
}

export default ListsCard;
