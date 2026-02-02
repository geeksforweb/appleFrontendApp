import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../404/Four04";

function SingleProductPage() {
  const { id } = useParams(); // FIXED param name

  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL; //.env URL

  useEffect(() => {
    fetch(`${API_URL}/iphones/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data); // backend returns single object
      })
      .catch(() => {
        setNotFound(true);
      });
  }, [id]);

  // ⏳ Loading
  if (!product && !notFound) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  // Not found
  if (notFound) {
    return <Four04 />;
  }

  // Product found
  return (
    <section className="internal-page-wrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5 pt-5">
            <div className="title-wrapper font-weight-bold">
              {product.product_name}
            </div>
            <div className="brief-description">
              {product.Product_brief_description}
            </div>
          </div>
        </div>

        <div className="row justify-content-center text-center product-holder h-100 m-5">
          <div className="col-sm-12 col-md-6 my-auto">
            <div className="starting-price">
              Starting at {product.Starting_price}
            </div>
            <div className="monthly-price">{product.Price_range}</div>
            <div className="product-details">{product.Product_description}</div>
          </div>

          <div className="col-sm-12 col-md-6">
            <img
              src={product.Product_img}
              alt={product.product_name}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
