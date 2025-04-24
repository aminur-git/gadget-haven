import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-white py-20 text-center t">
        <h1 className="text-xl  font-bold md:text-4xl mt-4">Gadget Heaven</h1>
        <h1 className="mt-6 px-8">Leading the way in cutting-edge technology and innovation.</h1>
      </div>
      <hr className="text-gray-200 max-w-4xl mx-auto" />
      <footer className= "text-black footer sm:footer-horizontal bg-white  p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
