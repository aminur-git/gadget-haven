import React from "react";
import bannerImg from "/src/assets/banner.jpg";

const Banner = () => {
  return (
    <div className="p-2">
      <div className="  pt-8 bg-[#9538E2]  text-center  text-white  md:rounded-2xl">
        <div className="  flex flex-col my-4 ">
          <h1 className="text-2xl mt-5 sm:text-2xl md:text-3xl lg:text-5xl sm:leading-10 md:leading-13 font-bold mb-6">
            Upgrade Your Tech Accessorize with <br />
            Gadget Heaven Accessories
          </h1>
          <p className="text-xs  lg:text-base mb-8 w-xs sm:w-xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <button className="w-[150px] mx-auto btn btn-primary border-none text-[#9538E2] mb-40 rounded-2xl shadow-none bg-[#ffffff]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex justify-center relative -top-24 ">
        <img
          src={bannerImg}
          className="rounded-2xl max-w-xs md:max-w-md lg:max-w-xl p-4 border border-white glass "
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
