import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import ItemForm from "../components/ItemForm";
import ListDoneToggle from "../components/ListDoneToggle";
import React from "react";
import { useParams, Link } from "react-router-dom";
import ItemContext from "../context/item.context"


const listType = "buy";

function ListBuyPage() {

  const { items, error, isLoading } = React.useContext(ItemContext);
  const { tripID } = useParams();

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around">
        <Link to={`/trips/${tripID}/lists/todo`} className="mr-20 text-xl mt-12 text-yellow-400 hover:text-black transition ease-in-out duration-200">To Do</Link>
        <Header>To Buy</Header>
        <Link to={`/trips/${tripID}/lists/topack`} className="ml-20 text-xl mt-12 text-yellow-400 hover:text-black transition ease-in-out duration-200">To Pack</Link>
      </div>
      {isLoading && <p>Loading list...</p>}
      {error && <p>Failed to load list.</p>}
      <div className="mt-4">
        <div>
          {items?.map((item) => {
            if (tripID === item.trip && item.listType === listType) {
              return <ItemCard key={item._id} item={item} />
            }
            return null;
          })}
        </div>
        <ItemForm listType={listType} />
      </div>
      <ListDoneToggle listType={listType} className='px-5'>Everything is done!</ListDoneToggle>
    </div>
  );
}


export default ListBuyPage;

// add back button
