import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosBase from "../../api/axiosConfig";
const API_BASE_URL = import.meta.env.VITE_API_URL; // || "http://localhost:3001";


function IphonePage() {
  const [iphones, setIphones] = useState([]);
  const [loading, setLoading] = useState(true); // 1. Add loading state
  const [error, setError] = useState(null); // 2. Add error state


useEffect(() => {
  setLoading(true);

  fetch(`${API_BASE_URL}/iphones`)
    .then(async (res) => {
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API Error ${res.status}: ${text}`);
      }
      return res.json();
    })
    .then((data) => {
      setIphones(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Fetch error:", err.message);
      setError("Backend API is unreachable or returned invalid data.");
      setLoading(false);
    });
}, []);



  // useEffect(() => {
  //   setLoading(true);
  //     fetch(`${API_BASE_URL}/iphones`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setIphones(data);
  //         setLoading(false); // Data is here!
  //       })
  //       .catch((err) => {
  //         console.error("Fetch error:", err);
  //         setError("Could not load iPhones. Please try again later.");
  //         setLoading(false);
  //       });
  // }, []);

  // 3. Conditional Rendering
  if (loading) {
    return (
      <div className="container top-100 text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Searching for the latest iPhones...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container top-100 text-center py-5 text-danger">
        <h3>Oops!</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper bold mt-5 pt-5">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>

          {iphones.length === 0 ? (
            <div className="text-center py-5">
              No products found in the database.
            </div>
          ) : (
            iphones.map((product, index) => {
              let order1 = index % 2 !== 0 ? "2" : "1";
              let order2 = index % 2 !== 0 ? "1" : "2";

              return (
                <div
                  key={product.Product_id}
                  className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
                >
                  <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                    <div className="product-title">{product.product_name}</div>
                    <div className="product-brief">
                      {product.Product_brief_description}
                    </div>
                    <div className="starting-price">{`Starting at ${product.Starting_price}`}</div>
                    <div className="monthly-price">{product.Price_range}</div>
                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <Link to={`/iphone/${product.Product_id}`}>
                            learn more
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={`col-sm-12 col-md-6 my-auto order-${order2}`}>
                    <div className="product-image">
                      <img
                        src={product.Product_img}
                        alt={product.product_name}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

export default IphonePage;