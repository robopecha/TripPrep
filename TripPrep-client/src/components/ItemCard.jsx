

function ItemCard ({content, done }) {


  return (
    <div className="border border-black rounded-sm mb-3 p-2 overflow-scroll bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={done ? 'w-6 inline ml-1 visible' : 'w-7 inline ml-1 invisible'}>
       <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <h5 className={done ? "inline ml-3 opacity-40 text-sm" : "inline ml-3 text-sm"}>{content}</h5>
    </div>
  );
}

export default ItemCard;
