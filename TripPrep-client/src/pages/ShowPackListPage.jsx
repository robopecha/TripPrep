import ShowPackCard from "../components/ShowPackCard";
import React from "react";
import { useParams } from "react-router-dom";
import ItemContext from "../context/item.context"


const listType = "topack";

function ShowPackListPage() {

  const { tripID } = useParams();
  const { items, error, isLoading } = React.useContext(ItemContext);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around">
        <h3 className="text-2xl my-6 text-center mt-10">Look at this pack list!</h3>
      </div>
      {isLoading && <p>Loading list...</p>}
      {error && <p>Failed to load list.</p>}
      <div>
        {items?.map((item) => {
          if (tripID === item.trip && item.listType === listType) {
            return <ShowPackCard key={item._id} item={item} />
          }
          return null;
        })}
      </div>
    </div>
  );
}


export default ShowPackListPage;


// add back button
