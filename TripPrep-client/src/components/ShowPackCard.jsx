import React from "react";


function ShowPackCard ({ item }) {

  console.log(item);

  return (
    <div className="flex justify-between border border-black rounded-sm mb-3 p-2 overflow-scroll bg-white hover:bg-gray-100 w-80">
      <h5 className="inline ml-3 text-sm">{item.content}</h5>
    </div>
  );
}


export default ShowPackCard;
