import ListButton from "./ListButton";
import React from "react";


function ListsCard({ trip }) {

  return (
    <div className="my-10 flex flex-col items-center gap-6">
      <ListButton to={`/trips/${trip._id}/lists/todo`} done={trip.doDone}>To Do</ListButton>
      <ListButton to={`/trips/${trip._id}/lists/tobuy`} done={trip.buyDone}>To Buy</ListButton>
      <ListButton to={`/trips/${trip._id}/lists/topack`} done={trip.packDone}>To Pack</ListButton>
    </div>
  );
}


export default ListsCard;
