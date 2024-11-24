import { mutate } from "swr";
import axios from "axios";

const API_URL = "https://tripprep.fly.dev/" || "http://localhost:5005";


function PackCard({ item }) {

  function deleteItem() {
    const storedToken = localStorage.getItem('authToken');
    axios
      .delete(
        `${API_URL}/api/items/${item._id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        mutate(`${API_URL}/api/items`);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex justify-between border border-black rounded-sm mb-3 p-2 overflow-scroll bg-white hover:bg-gray-100 w-80">
      <h5 className="inline ml-3 text-sm">{item.content}</h5>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-gray-200 hover:text-gray-800 cursor-pointer" onClick={deleteItem}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
}


export default PackCard;
