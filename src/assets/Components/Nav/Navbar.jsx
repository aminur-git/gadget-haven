import React from "react";
import { Link, NavLink } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/statistics'}>Statistics</NavLink>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
    </>

  

  return (
    <div className="navbar text-[#9538E2]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"}><div className="text-md md:text-2xl font-bold">Gadget Haven</div></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 text-lg">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="flex items-center gap-4 justify-start text-sm sm:text-base">
        <NavLink to={"/dashboard/cart"}><button className="btn btn-sm md:btn-md btn-circle bg-white   ">
          <BsCart3 className="text-md md:text-xl  bg-white" />
        </button></NavLink>
        <button className="btn btn-circle btn-xs bg-white sm:btn-md ">
          <FaRegHeart className="text-md md:text-xl" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
