import React from "react";
import { useParams } from "react-router-dom";
import { mutate } from "swr";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


function ItemForm({ listType }) {

  const [content, setContent] = React.useState("");
  const {tripID} = useParams();
  const id = React.useId();

  function handleSubmit(event) {
    event.preventDefault();
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { content, tripID, listType };
    axios
      .post(
        `${API_URL}/api/items`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        mutate(`${API_URL}/api/items`);
        setContent("");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="mb-4 flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          id={id}
          type="text"
          name="content"
          value={content}
          className="border border-black rounded-sm w-64 h-10 text-sm"
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit" className="bg-blue-500 py-2 px-6 rounded-sm ml-1 hover:bg-blue-600 hover:text-gray-100 transition ease-in-out duration-200">+</button>
      </form>
    </div>
  );
}


export default ItemForm;
