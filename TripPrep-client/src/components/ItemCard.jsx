import React from "react";
import { GithubPicker } from 'react-color';
import { mutate } from "swr";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


function ItemCard({ item }) {

  const [itemDone, setItemDone] = React.useState(item.done);
  const [color, setColor] = React.useState(item.backgroundColor);
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  function toggleClick() {
    setItemDone(!itemDone);
  }

  function handleColorIconClick() {
    setShowColorPicker((prevState) => !prevState);
  }

  React.useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const requestBody = { done: itemDone, backgroundColor: color };
    axios
      .put(
        `${API_URL}/api/items/${item._id}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        mutate(`${API_URL}/api/items`);
      })
      .catch((error) => console.log(error));

  }, [itemDone, color]);


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
    <div>
      <div style={{background:item.backgroundColor}} className="flex justify-between border border-black rounded-sm mb-3 p-2 overflow-scroll bg-white hover:bg-gray-100 w-80">
        <div onClick={toggleClick} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={item.done ? 'w-7 inline ml-1 visible' : 'w-7 inline ml-1 invisible'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <h5 className={item.done ? "inline ml-3 opacity-40 text-sm" : "inline ml-3 text-sm"}>{item.content}</h5>
        </div>
        <div>
          <div title='delete'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-gray-200 hover:text-gray-800 cursor-pointer" onClick={deleteItem}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div title='pick a color'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-gray-200 hover:text-gray-800 cursor-pointer" onClick={handleColorIconClick}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </div>
        </div>
      </div>
      {showColorPicker && (
        <div className="flex justify-end -mt-3">
          <GithubPicker onChange={(e) => setColor(e.hex)} colors={['#fecaca', '#fef08a', '#bbf7d0', '#bfdbfe', '#e9d5ff', "#FFF"]} triangle={'top-right'} width={'165px'} />
        </div>
      )}
    </div>
  );
}


export default ItemCard;
