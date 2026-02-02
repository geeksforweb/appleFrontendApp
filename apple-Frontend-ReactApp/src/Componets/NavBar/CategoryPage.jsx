import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// this componet are used by IphonePage, IpadPage, WatchPage, MusicPage to avoid code repetition for code reusability
function CategoryPage({ category, title }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/products?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div className="text-center mt-5 pt-5">
        <div className="spinner-border text-dark" role="status"></div>
      </div>
    );
  }

  return (
    <section className="internal-page-wrapper top-100">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper bold mt-5 pt-5">{title}</div>
            <div className="brief-description">The best for the brightest.</div>
          </div>
        </div>

        {products.map((product, index) => {
          const order1 = index % 2 ? "2" : "1";
          const order2 = index % 2 ? "1" : "2";

          return (
            <div
              key={product.Product_id}
              className="row product-holder top-100"
            >
              <div className={`col-md-6 my-auto order-${order1}`}>
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">
                  {product.Product_brief_description}
                </div>
                <div className="starting-price">
                  Starting at {product.Starting_price}
                </div>
                <div className="monthly-price">{product.Price_range}</div>
                <Link to={`/product/${product.Product_id}`}>Learn more</Link>
              </div>

              <div className={`col-md-6 my-auto order-${order2}`}>
                <img src={product.Product_img} alt={product.product_name} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryPage;
