import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";

function AddItem(props) {
  const [content, setContent] = useState("");
  const {tripID} = useParams();

  const listType = props.listType

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem('authToken');

    const requestBody = { content, tripID, listType };
    axios
      .post(
        `${API_URL}/api/items`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setContent("");
        props.refreshItems();
      })
      .catch((error) => {
        console.log("err", error)});
  };


  return (
    <div className="">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="content"
          value={content}
          className="border border-black rounded-sm w-60 h-9"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 ml-3 p-1 rounded-sm border-2 border-white hover:border-black transition ease-in-out duration-200">Add to list</button>
      </form>
    </div>
  );
}

export default AddItem;
