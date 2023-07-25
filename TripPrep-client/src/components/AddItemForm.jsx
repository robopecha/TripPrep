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
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="content"
          value={content}
          className="border border-black rounded-sm w-8/10 h-10 text-sm"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 py-2 px-3 rounded-sm ml-1">+</button>
      </form>
    </div>
  );
}

export default AddItem;
