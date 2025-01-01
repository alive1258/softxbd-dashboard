import React from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { TiExportOutline } from "react-icons/ti";

const TopSaleProduct = () => {
  return (
    <div className="bg-[#fff]  mt-6  rounded-xl w-ful">
      <div className="z-50 p-2 w-full">
        <div className="flex items-center justify-between pt-3 px-4">
          <h1 className="text-lg font-medium  pb-2">Top Selling Products</h1>
          <div className="flex items-center space-x-4">
            {/* Active state for 'Day' */}
            <div className="w-[262px] md:col-span-1 xl:col-span-1 relative">
              <IoMdSearch className="absolute top-3.5 left-2 text-base " />
              <input
                type="search"
                className="pl-7  py-2 bg-[#F4F4F4]   text-secondary-base  rounded-lg placeholder:text-[#929394] w-full outline-none"
                placeholder="Search here..."
              />
            </div>
            <div className="btn flex items-center space-x-2">
              <TiExportOutline />
              <span> Export</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full pt-2">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full mb-8  rounded-lg">
            <thead className="border-b px-3 border-dashed border-gray-200">
              <tr className=" text-start text-[13px] ">
                <th className="py-4 px-4 text-start ">ID</th>
                <th className="py-4 px-4 text-start r">Date</th>
                <th className="py-4 px-4 text-start">Order Id</th>
                <th className="py-4 px-4 text-start">Product</th>
                <th className="py-4 px-4 text-start">Customer</th>
                <th className="py-4 px-4 text-start mr-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm hover:text-[#4D4D4D] hover:bg-[#E2E8F0]  px-[10px] border-b border-dashed border-gray-200">
                <td className="py-5   px-4">1</td>
                <td className="py-3  px-4">12.11.2025</td>
                <td className="py-3  px-4 ">12345R43</td>
                <td className="py-3 px-4 ">Tvs ss</td>
                <td className="py-3 px-4 ">Shamim</td>
                <td className="">
                  <div className="text-center text-[#F0950C] py-2 bg-[#FFFAEB]  rounded-2xl mr-3">
                    Pending
                  </div>
                </td>
              </tr>
              <tr className=" hover:text-[#4D4D4D] hover:bg-[#E2E8F0] text-[13px] px-[10px] border-b border-dashed border-gray-200">
                <td className="py-5  px-4">1</td>
                <td className="py-3  px-4">12.11.2025</td>
                <td className="py-3 px-4 ">12345R43</td>
                <td className="py-3 px-4 ">Tvs ss</td>
                <td className="py-3 px-4 ">Shamim</td>
                <td className="">
                  <div className="text-center text-[#10B981] py-2 bg-[#ECF5F0]  rounded-2xl mr-3">
                    Done
                  </div>
                </td>
              </tr>
              <tr className="hover:text-[#4D4D4D] hover:bg-[#E2E8F0]  text-[13px] px-[10px] border-b border-dashed border-gray-200">
                <td className="py-5  px-4">1</td>
                <td className="py-3  px-4">12.11.2025</td>
                <td className="py-3 px-4 ">12345R43</td>
                <td className="py-3 px-4 ">Tvs ss</td>
                <td className="py-3 px-4 ">Shamim</td>
                <td className="">
                  <div className="text-center text-[#F0950C] py-2 bg-[#FFFAEB]  rounded-2xl mr-3">
                    Pending
                  </div>
                </td>
              </tr>
              <tr className="hover:text-[#4D4D4D] hover:bg-[#E2E8F0]  text-[13px] px-[10px] border-b border-dashed border-gray-200">
                <td className="py-5  px-4">1</td>
                <td className="py-3  px-4">12.11.2025</td>
                <td className="py-3 px-4 ">12345R43</td>
                <td className="py-3 px-4 ">Tvs ss</td>
                <td className="py-3 px-4 ">Shamim</td>
                <td className="">
                  <div className="text-center text-[#10B981] py-2 bg-[#ECF5F0]  rounded-2xl mr-3">
                    Done
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between px-4 pb-4">
            <p className="text-info-muted">Showing 5 of 10 Results </p>
            <div className="flex items-center space-x-2">
              <div className="border  cursor-pointer  border-gray-200 rounded-lg size-10 flex items-center justify-center">
                <IoIosArrowBack className=" text-2xl " />
              </div>
              <div className="border btn  cursor-pointer  border-gray-200 rounded-lg size-10 flex items-center justify-center">
                <span>1</span>
              </div>
              <div className="border  cursor-pointer  border-gray-200 rounded-lg size-10 flex items-center justify-center">
                <span>2</span>
              </div>
              <div className="border cursor-pointer  border-gray-200 rounded-lg size-10 flex items-center justify-center">
                <IoIosArrowForward className=" text-2xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSaleProduct;
