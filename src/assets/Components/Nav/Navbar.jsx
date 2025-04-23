import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/statistics'}>Statistics</NavLink>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
    </>

  

  return (
    <div className="navbar  text-white  ">
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
        <a className="btn btn-ghost text-xl">Gadget Haven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        
      </div>
    </div>
  );
};

export default Navbar;
