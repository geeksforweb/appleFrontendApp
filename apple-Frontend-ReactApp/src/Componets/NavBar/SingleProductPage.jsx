import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../404/Four04";

function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/product/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setProduct(data.product))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <Four04 />;
  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <section className="internal-page-wrapper">
      <div className="container mt-5 pt-5">
        <h1>{product.product_name}</h1>
        <p>{product.Product_brief_description}</p>
        <p>{product.Product_description}</p>
        <p>{product.Starting_price}</p>
        <img src={product.Product_img} alt={product.product_name} />
      </div>
    </section>
  );
}

export default SingleProductPage;
