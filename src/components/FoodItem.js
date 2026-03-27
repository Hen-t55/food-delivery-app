function FoodItem({ food, addToCart, getItemCount }) {
  const count = getItemCount(food.id);

  return (
    <div className="food-item">
      <div>
        <h3>{food.name}</h3>
        <p>₹{food.price}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {count > 0 && (
          <span className="item-count">{count}</span>
        )}
        <button className="add-btn" onClick={() => addToCart(food)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodItem;