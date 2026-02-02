// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Assuming react-router-dom is used for <Link>
// import ProductPage from "./SingleProductPage";

// function IphonePage() {
//   // 1. State for products (from previous interaction, assumed to be part of this component)
//   const [iphones, setIphones] = useState([]);

//   // 2. Fetch data when the component mounts (from previous interaction)
// useEffect(() => {
//   fetch("https://applsite.gashawtech.com/iphones")
//     .then((res) => {
//       if (!res.ok) throw new Error("Network response failed");
//       return res.json();
//     })
//     .then((data) => setIphones(data))
//     .catch((err) => console.error("Fetch error:", err));
// }, []);


//   console.log(iphones);
//   // 3. Render the component structure and loop through fetched products
//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             {/* Title and Brief Description */}
//             <div className="col-12">
//               <div className="title-wrapper bold mt-5 pt-5">Iphones</div>
//               <div className="brief-description">
//                 The best for the brightest.
//               </div>
//             </div>
//           </div>

//           {/* Mapping through Products */}
//           {iphones.map((product, index) => {
//             // Determine the product's individual page URL
//             // Use the index to alternate the content and image columns (Order logic)
//             let order1 = index % 2 !== 0 ? "2" : "1";
//             let order2 = index % 2 !== 0 ? "1" : "2";

//             let productDiv = (
//               <div
//                 key={product.product_url}
//                 className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
//               >
//                 {/* Product Content Column (Text & Links) */}
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-title">{product.product_name}</div>
//                   <div className="product-brief">
//                     {product.Product_brief_description}
//                   </div>
//                   <div className="starting-price">
//                     {`Starting at ${product.Starting_price}`}
//                   </div>
//                   <div className="monthly-price">{product.Price_range}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={`/iphone/${product.Product_id}`}>
//                           learn more
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Product Image Column */}
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order2}`}>
//                   <div className="product-image">
//                     <img src={product.Product_img} alt="Apple Product" />
//                   </div>
//                 </div>
//               </div>
//             );
//             return productDiv;
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default IphonePage;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used for <Link>
import ProductPage from "./SingleProductPage";

function IphonePage() {
  const [iphones, setIphones] = useState([]);
  const [loading, setLoading] = useState(true); //loader state

  // Get API URL from .env
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/iphones`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response failed");
        return res.json();
      })
      .then((data) => {
        setIphones(data);
        setLoading(false); //stop loader once data fetched
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false); //stop loader on error
      });
  }, []);

  console.log(iphones);

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

          {/*LOADER: Shown only while fetching */}
          {loading && (
            <div className="text-center mt-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          {/*SHOW PRODUCTS AFTER LOADING */}
          {!loading &&
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
                    <div className="starting-price">
                      {`Starting at ${product.Starting_price}`}
                    </div>
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
                      <img src={product.Product_img} alt="Apple Product" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default IphonePage;


