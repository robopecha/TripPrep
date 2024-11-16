import ListButton from "./ListButton";
import React from "react";


function ListsCard({ theTrip }) {

  return (
    <div className="my-10 flex flex-col items-center gap-6">
      <ListButton to={`/trips/${theTrip?._id}/lists/todo`} done={theTrip?.doDone}>To Do</ListButton>
      <ListButton to={`/trips/${theTrip?._id}/lists/tobuy`} done={theTrip?.buyDone}>To Buy</ListButton>
      <ListButton to={`/trips/${theTrip?._id}/lists/topack`} done={theTrip?.packDone}>To Pack</ListButton>
    </div>
  );
}


export default ListsCard;
