import React, { useContext } from "react";
import { CartContext } from "./AddToCart";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Mobile", price: 20000 }
];

const Product = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "20px" }}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
