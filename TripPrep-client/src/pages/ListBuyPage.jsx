import Header from "../components/Header";
import ListLink from "../components/ListLink";
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
        <ListLink tripID={tripID} linkType={'do'}>To Do</ListLink>
        <Header>To Buy</Header>
        <ListLink tripID={tripID} linkType={'pack'}>To Pack</ListLink>
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
