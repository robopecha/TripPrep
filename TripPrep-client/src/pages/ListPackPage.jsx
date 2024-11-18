import TripInfo from "../components/TripInfo";
import Header from "../components/Header";
import ListLink from "../components/ListLink";
import BlueButton from "../components/BlueButton";
import PackCard from "../components/PackCard";
import ItemForm from "../components/ItemForm";
import React from "react";
import { useParams, Link } from "react-router-dom";
import ItemContext from "../context/item.context"


const listType = "pack";

function ListPackPage() {

  const { tripID } = useParams();
  const { items, error, isLoading } = React.useContext(ItemContext);
  const theItems = items?.filter(item => tripID === item.trip && item.listType === listType);

  return (
    <div className="flex flex-col items-center">
      <TripInfo tripID={tripID} />
      <div className="flex justify-around">
        <ListLink tripID={tripID} linkType={'do'}>To Do</ListLink>
        <Header>To Pack</Header>
        <ListLink tripID={tripID} linkType={'buy'}>To Buy</ListLink>
      </div>
      <Link to={`/trips/${tripID}/lists/packmode`}><BlueButton className="mb-8">Pack Mode</BlueButton></Link>
      {isLoading && <p>Loading list...</p>}
      {error && <p>Failed to load list.</p>}
      <div className="mt-4">
        <div>
          {theItems?.map((item) => <PackCard key={item?._id} item={item} />)}
        </div>
        <ItemForm listType={listType} />
      </div>
    </div>
  );
}


export default ListPackPage;

// add back button
