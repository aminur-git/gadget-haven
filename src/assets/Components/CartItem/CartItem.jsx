import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const CartItem = ({ item }) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
    Specification,
    availability,
    description,
    rating,
  } = item;
  return (
    <div>
      <div className="flex  justify-around gap-4 sm:gap-8 p-2 items-center bg-white">
        <figure className="h-full  border rounded-2xl border-gray-200">
          <img src={product_image} className="w-[200px] rounded-2xl" alt="" />
        </figure>
        <div className="p-2 ">
          <div className="space-y-2">
            <h1 className="text-base sm:text-2xl font-semibold ">
              {product_title}
            </h1>
            <p className="text-xs sm:text-base text-[#09080F99]">
              {description}
            </p>
            <p className="text-xs  sm:text-xl font-semibold">Price: {price}$</p>
          </div>
        </div>
        <div className="flex justify-end ">
            <button className="btn btn-circle bg-white border-none text-2xl"><IoCloseCircleSharp  className="text-red-700" /></button>
          </div>
      </div>
    </div>
  );
};

export default CartItem;
