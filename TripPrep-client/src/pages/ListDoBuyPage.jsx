import TripInfo from "../components/TripInfo";
import Header from "../components/Header";
import ListLink from "../components/ListLink";
import ItemCard from "../components/ItemCard";
import ItemForm from "../components/ItemForm";
import ListDoneToggle from "../components/ListDoneToggle";
import React from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../context/ItemProvider"


function ListDoBuyPage({ listType }) {

  const { tripID } = useParams();
  const { items, error, isLoading } = React.useContext(ItemContext);
  const theItems = items?.filter((item) => tripID === item.trip && item.listType === listType);

  const linkType = listType === 'do' ? 'buy' : 'do';
  const link = listType === 'do' ? 'To Buy' : 'To Do';
  const header = listType === 'do' ? 'To Do' : 'To Buy';

  return (
    <div className="flex flex-col items-center">
      <TripInfo tripID={tripID} />
      <div className="flex justify-around">
        <ListLink tripID={tripID} linkType={linkType}>{link}</ListLink>
        <Header>{header}</Header>
        <ListLink tripID={tripID} linkType={'pack'}>To Pack</ListLink>
      </div>
      {isLoading && <p>Loading list...</p>}
      {error && <p>Failed to load list.</p>}
      {!isLoading && !error && !theItems && <p>List not found.</p>}
      {!isLoading && !error && theItems && (
        <>
          <div className="mt-4">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
              {theItems.map((item) => <ItemCard key={item._id} item={item} />)}
            </div>
            <ItemForm listType={listType} />
          </div>
          <ListDoneToggle listType={listType} className='px-5'>Everything is done!</ListDoneToggle>
        </>
      )}
    </div>
  );
}


export default ListDoBuyPage;
