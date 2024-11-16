import Header from "../components/Header";
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
      <Header>Trip info here</Header>
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

// add trip info, user name
