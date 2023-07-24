function ItemCard ( { content } ) {

  return (
    <div className="border border-black rounded-sm mb-5 p-2 w-60">
      <h5>{content}</h5>
    </div>
  );
}

export default ItemCard;
