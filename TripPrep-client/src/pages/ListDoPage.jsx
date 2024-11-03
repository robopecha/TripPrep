import ItemCard from "../components/ItemCard";
import AddItemForm from "../components/AddItemForm";
import React from "react";
import { useParams, Link } from "react-router-dom";
import ItemContext from "../context/item.context"


const listType = "todo";

function ListDoPage() {

  const { items, error, isLoading } = React.useContext(ItemContext);
  const { tripID } = useParams();

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around">
        <Link to={`/trips/${tripID}/lists/tobuy`} className="mr-20 text-xl mt-12 text-yellow-400 hover:text-black transition ease-in-out duration-200">To Buy</Link>
        <h3 className="text-4xl my-6 text-center mt-10">To Do</h3>
        <Link to={`/trips/${tripID}/lists/topack`} className="ml-20 text-xl mt-12 text-yellow-400 hover:text-black transition ease-in-out duration-200">To Pack</Link>
      </div>
      {isLoading && <p>Loading list...</p>}
      {error && <p>Failed to load list.</p>}
      <div className="mt-4">
        <div>
          { items?.map((item) => {
            if (tripID === item.trip && item.listType === listType) {
              return <ItemCard key={item._id} item={item} />
            }
            return null;
          })}
        </div>
        <AddItemForm listType={listType} />
      </div>
    </div>
  );
}

export default ListDoPage;

// add back button
