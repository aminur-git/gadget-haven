import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Context } from "../Root/Root";
import { ToastContainer, toast } from "react-toastify";

const ProductType = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(Context);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [cart]);

  const product = products.find((p) => p.product_id == productId);

  if (!product) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  const exists = () => toast("Already exists");
  const success = () => toast("Success");
  const available = () => toast("Not Available");

  const {
    product_id,
    product_title,
    product_image,
    price,
    Specification,
    availability,
    description,
    rating,
  } = product;

  const handleAddToCart = () => {
    if (!product.availability) {
      available();
    } else if (cart.some((item) => item.product_id === product.product_id)) {
      exists();
    } else {
      const totalCart = [...cart, product];
      setCart(totalCart);
      success();
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="p-2">
        <div className="  pt-8 bg-[#9538E2]  text-center  text-white  md:rounded-2xl">
          <div className="  flex flex-col my-4 pb-30 ">
            <h1 className="text-2xl mt-5 sm:text-2xl md:text-3xl lg:text-5xl sm:leading-10 md:leading-13 font-bold mb-6">
              Product Details
            </h1>
            <p className="text-xs  lg:text-base mb-8 w-xs sm:w-xl mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className=" flex justify-center relative -top-40 md:-top-35 p-3 ">
          {/* Product */}
          <div className="bg-white flex flex-col sm:flex-row items-center p-4  rounded-2xl">
            <div className="rounded-2xl max-w-xs md:max-w-md lg:max-w-xl ">
              <img src={product_image} className=" rounded-2xl" alt="" />
            </div>

            <div className="space-y-3 py-2">
              <h1 className="font-bold text-xl md:text-4xl">{product_title}</h1>
              <p className="text-sm sm:text-base font-semibold">
                Price: ${price}
              </p>
              <section className="">
                {availability ? (
                  <div className="badge badge-outline badge-success ">
                    In Stock
                  </div>
                ) : (
                  <div className="badge badge-outline badge-error">
                    Out of stock
                  </div>
                )}
              </section>
              <section className="text-sm sm:text-base pr-8">
                {description}
              </section>
              <section>
                <span className="font-bold text-sm sm:text-base">
                  Specifications:
                </span>
                <ul className="px-4">
                  {Specification.map((spec, idx) => (
                    <li className="list-decimal text-sm sm:text-base" key={idx}>
                      {spec},{" "}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="flex items-center">
                <span className=" font-bold flex items-center gap-2 text-sm sm:text-base">
                  Rating: <span> {rating} </span>
                  <FaStar className="text-yellow-400 text-xl" />
                </span>
              </section>
              <div className="flex items-center gap-8 justify-start text-sm sm:text-base">
                <button
                  onClick={() => handleAddToCart()}
                  className="btn btn-xs sm:btn-md text-white bg-[#9538E2] border-none rounded-2xl px-8 py-4"
                >
                  Add To Cart <BsCart3 className="" />
                </button>
                <button className="btn btn-circle btn-xs sm:btn-md ">
                  <FaRegHeart className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductType;
