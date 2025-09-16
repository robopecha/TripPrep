import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";


function ListButton({ to, done, children }) {

  return (
    <div className="relative inline-block">
      <Link to={to}>
        <Button className="blue-button relative !bg-yellow-400 text-center w-60 py-2 my-2 text-xl">
          {children}
        </Button>
      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor"
        className={done ? 'absolute -top-8 left-48 w-24 visible' : 'absolute -top-8 left-48 w-24 invisible'}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  )
}


export default ListButton;
