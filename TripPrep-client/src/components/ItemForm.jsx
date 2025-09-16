import React from "react";
import Button from "../components/Button";
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
        <Button type="submit" className="form-button">+</Button>
      </form>
    </div>
  );
}


export default ItemForm;
