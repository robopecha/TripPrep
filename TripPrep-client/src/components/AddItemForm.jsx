import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";

function AddItem(props) {
  const [content, setContent] = useState("");
  const {tripID} = useParams()

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem('authToken');

    const requestBody = { content, tripID, listType: "todo" };

    axios
      .post(
        `${API_URL}/api/items`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setContent("");
      })
      .catch((error) => console.log(error));
  };


  return (
    <div>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Add to list</button>
      </form>
    </div>
  );
}

export default AddItem;
