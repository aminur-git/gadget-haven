import React from "react";

const Banner = () => {
  return (
    <div>
      <div className=" p-8 sm:p-14  text-center  text-white ">
        <div className="md:p-10 flex flex-col">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl md:leading-18 font-bold mb-6">
            Upgrade Your Tech Accessorize with <br />
            Gadget Heaven Accessories
          </h1>
          <p className="text-xs sm:text-base mb-8">
            Explore the latest gadgets that will take your experience to the
            next level. <br /> From smart devices to the coolest accessories, we
            have it all!
          </p>

          <button className="w-[150px] mx-auto btn btn-primary border-none text-[#9538E2] rounded-2xl shadow-none  bg-[#ffffff]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
