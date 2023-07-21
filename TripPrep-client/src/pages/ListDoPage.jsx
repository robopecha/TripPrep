// import ItemCard from "../components/ItemCard";
import AddItemForm from "../components/AddItemForm";

function ListDoPage() {
  return (
    <div>
      <h3>To Do</h3>
      {/* {items.map((item) => (
        <ItemCard key={item._id} {...item} />
      ))} */}
      <AddItemForm  />
    </div>
  );
}

export default ListDoPage;
