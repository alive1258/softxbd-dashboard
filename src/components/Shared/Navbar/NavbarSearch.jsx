import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const NavbarSearch = () => {
  return (
    <>
      <div className="w-[262px] md:col-span-1 xl:col-span-1 relative">
        <IoMdSearch className="absolute top-3.5 left-2 text-base " />
        <input
          type="search"
          className="pl-6  py-2 bg-[#EFF4FB] border border-[#929394]   text-secondary-base  rounded-lg placeholder:text-[#929394] w-full outline-none"
          placeholder="Search here..."
        />
        {/* <IoSearchOutline className="absolute top-3.5 right-4 text-base " /> */}
      </div>
    </>
  );
};

export default NavbarSearch;
