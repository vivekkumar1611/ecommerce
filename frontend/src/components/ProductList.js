import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")  // relative path; Nginx will proxy
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={p.image_url} alt={p.name} width="150" />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

export default ProductList;
