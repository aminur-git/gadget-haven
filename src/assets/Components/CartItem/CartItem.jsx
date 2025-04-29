import React, { useContext } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import Cart from "../Cart/Cart";
import { Context } from "../Root/Root";

const CartItem = ({ item }) => {
  const {cart, setCart} = useContext(Context)

  const handleCartDelete = (cart)=> {
     if (cart.some((cartItem) => cartItem.product_id === item.product_id)) {
      const updateCart = cart.pop(item);
      setCart(updateCart)
    }
  }
     
  

  const {
    product_title,
    product_image,
    price,
    description,
  } = item;
  return (
    <div className="px-2">
      <div className="flex  justify-around gap-4 sm:gap-8 py-4 px-2  items-center rounded-2xl bg-white">
        <figure className="h-full  border rounded-2xl border-gray-200">
          <img src={product_image} className="w-[200px] rounded-2xl" alt="" />
        </figure>
        <div className="">
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
            <button onClick={()=>handleCartDelete(cart)} className="btn btn-circle bg-white border-none text-2xl"><IoCloseCircleSharp  className="text-red-700" /></button>
          </div>
      </div>
    </div>
  );
};

export default CartItem;
