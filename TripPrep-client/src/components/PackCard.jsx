

function PackCard ({content, done }) {


  return (
    <div className="border border-black rounded-sm mb-3 p-2 overflow-scroll bg-white hover:bg-gray-100 w-80">
      <h5 className={done ? "inline ml-3 text-sm bg-green-300" : "inline ml-3 text-sm"}>{content}</h5>
    </div>
  );
}

export default PackCard;
