import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import { Context } from "../Root/Root";
import Product from "../Product/Product";
import { NavLink } from "react-router";
const Home = () => {
  const {data} = useContext(Context);
  const products = data
  return (
    <div className="">
      <div className="">
        <Banner></Banner>
      </div>
      <h1 className="text-3xl font-semibold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="">
        <ul>
          <li>
            <NavLink>All</NavLink>
          </li>
          <li>
            <NavLink>Phones</NavLink>
          </li>
          <li>
            <NavLink>Laptop</NavLink>
          </li>
          <li>
            <NavLink>Earphone</NavLink>
          </li>
        </ul>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch p-4">
        {
          !products || products.length === 0 ? <div>loading..</div> : products.map((product, idx) => (
            <Product key={idx} product={product}></Product>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
