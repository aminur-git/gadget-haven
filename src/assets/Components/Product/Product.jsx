import React from "react";

const Product = ({ product }) => {
  const { product_title, product_image, price } = product;
  return (
    <div>
      <div className="card p-4 bg-white shadow-xl ">
        <figure className=" bg-white h-[326px]">
          <img className="rounded-2xl border  w-full border-gray-200 p-4"
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>
            Price: {price}$
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline rounded-2xl btn-primary">View Details</button>
          </div>
        </div>
      </div> 
      
    </div>
  );
};

export default Product;
