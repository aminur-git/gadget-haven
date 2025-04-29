import React from "react";
import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="">
      <div className="bg-[#9538E2]   text-white">
      <div className="text-center p-6">
        <h1 className="font-bold my-2 text-3xl">Dashboard</h1>
        <p className="text-base font-normal m-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-6 ">
          <Link to={"/dashboard/cart"}><button className="btn  rounded-2xl px-8">Cart</button></Link>
          <Link to={"/dashboard/wishlist"}><button className="btn  rounded-2xl px-8 border-white">
            Wishlist
          </button></Link>
        </div>
      </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
