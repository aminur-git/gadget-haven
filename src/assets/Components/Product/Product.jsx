import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { product_title, product_image, price, product_id } = product;


  
  

  return (
    <div>
      <div className="card p-4  bg-white shadow-xl ">
        <figure className=" bg-white h-[300px]">
          <img
            className="rounded-2xl border  border-gray-200 p-4"
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}$</p>
          <div className="card-actions justify-start">
            <Link to={`/product-details/${product_id}`} ><button className="btn btn-outline rounded-2xl btn-primary">
              View Details
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
