"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import shopeNumber1 from "../../../../public/assets/images/shonenumber1.png";
import shopeNumber2 from "../../../../public/assets/images/shonenumber2.png";
import shopeNumber3 from "../../../../public/assets/images/shonenumber3.png";
import shopeNumber4 from "../../../../public/assets/images/shonenumber4.png";
import shopeNumber5 from "../../../../public/assets/images/shonenumber1.png";

const BestShopeSellers = () => {
  const [modalShow, setModalShow] = useState(false);

  const toggleModal = () => {
    setModalShow((prev) => !prev);
  };

  return (
    <div>
      <div className="flex   items-center justify-between">
        <h4 className="text-[18px] font-medium text-neutral-muted">
          Best Shop Sellers
        </h4>
        <div>
          <div
            onClick={toggleModal}
            className="border border-gray-200  w-20 rounded-md px-2 py-1.5 flex items-center space-x-4 cursor-pointer"
          >
            <span>Day</span>
            <IoIosArrowDown />
          </div>
          <div className="relative right-16">
            {modalShow && (
              <>
                {/* Modal */}
                <div className="absolute w-36 mt-2 bg-white border border-gray-200 rounded-md shadow-md z-20">
                  <div className=" px-2 py-2 text-[#7A7A7A]">
                    <p className="hover:bg-[#F4F4F4] p-1.5 cursor-pointer rounded-lg">
                      Day
                    </p>
                    <p className="hover:bg-[#F4F4F4] p-1.5 cursor-pointer rounded-lg">
                      Week
                    </p>
                    <p className="hover:bg-[#F4F4F4] p-1.5 cursor-pointer rounded-lg">
                      Month
                    </p>
                    <p className="hover:bg-[#F4F4F4] p-1.5 cursor-pointer rounded-lg">
                      Year
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 mt-4"></div>
      {/* content  */}
      <div className="mt-2">
        {/* country 1  */}
        <div className="mx-auto w-full ">
          <div className="overflow-x-auto w-full">
            <table className="min-w-full mb-2  rounded-lg">
              <thead className="border-b px-3 border-dashed border-gray-200">
                <tr className=" text-[13px] ">
                  <th className="py-2 px-4 text-start">Shope Name</th>
                  <th className="py-2 px-4 text-start">Category</th>
                  <th className="py-2 px-4 text-start">Total</th>

                  <th className="py-2 px-4  mr-3 text-start">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* tr 1  */}
                <tr className="text-sm hover:text-[#4D4D4D] hover:bg-[#E2E8F0] px-[10px] border-b border-dashed border-gray-200">
                  <td className="py-2   px-4">
                    <div className="flex items-center space-x-2">
                      <div className=" size-10 rounded-full">
                        <Image
                          src={shopeNumber1}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h6 className="text-info-base text-sm font-medium">
                          Calvin
                        </h6>
                        <p className="text-black-base text-sm ">75 Purchases</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2  px-4">Fashion</td>
                  <td className="py-2  px-4 ">$4523</td>

                  <td className="">
                    {/* <div className="text-center text-[#F0950C] py-2 bg-[#FFFAEB]  rounded-2xl mr-3">
                      Pending
                    </div> */}
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-[#E0ECFA] rounded mt-2 h-2">
                        <div
                          // className="bg-[#5497FA] h-1 rounded"
                          className="bg-[#3C50E0] h-2 rounded"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-neutral-muted">80%</p>
                    </div>
                  </td>
                </tr>
                {/* tr 2 */}
                <tr className="text-sm hover:text-[#4D4D4D] hover:bg-[#E2E8F0] px-[10px] border-b border-dashed border-gray-200">
                  <td className="py-2   px-4">
                    <div className="flex items-center space-x-2">
                      <div className=" size-10 rounded-full">
                        <Image
                          src={shopeNumber2}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h6 className="text-info-base text-sm font-medium">
                          Drwight
                        </h6>
                        <p className="text-black-base text-sm ">55 Purchases</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3  px-4">Health, Grocery</td>
                  <td className="py-3  px-4 ">$3523</td>

                  <td className="">
                    {/* <div className="text-center text-[#F0950C] py-2 bg-[#FFFAEB]  rounded-2xl mr-3">
                      Pending
                    </div> */}
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-[#E0ECFA] rounded mt-2 h-2">
                        <div
                          // className="bg-[#5497FA] h-1 rounded"
                          className="bg-warning-base h-2 rounded"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-neutral-muted">75%</p>
                    </div>
                  </td>
                </tr>
                {/* tr 3 */}
                <tr className="text-sm hover:text-[#4D4D4D] hover:bg-[#E2E8F0] px-[10px] border-b border-dashed border-gray-200">
                  <td className="py-2   px-4">
                    <div className="flex items-center space-x-2">
                      <div className=" size-10 rounded-full">
                        <Image
                          src={shopeNumber3}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h6 className="text-info-base text-sm font-medium">
                          Maliva
                        </h6>
                        <p className="text-black-base text-sm ">44 Purchases</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3  px-4">Electronics</td>
                  <td className="py-3  px-4 ">$31993</td>

                  <td className="">
                    {/* <div className="text-center text-[#F0950C] py-2 bg-[#FFFAEB]  rounded-2xl mr-3">
                      Pending
                    </div> */}
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-[#E0ECFA] rounded mt-2 h-2">
                        <div
                          // className="bg-[#5497FA] h-1 rounded"
                          className="bg-danger-base h-2 rounded"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-neutral-muted">65%</p>
                    </div>
                  </td>
                </tr>
                {/* tr 4 */}
                <tr className="text-sm hover:text-[#4D4D4D] hover:bg-[#E2E8F0] px-[10px] border-b border-dashed border-gray-200">
                  <td className="py-2   px-4">
                    <div className="flex items-center space-x-2">
                      <div className=" size-10 rounded-full">
                        <Image
                          src={shopeNumber4}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h6 className="text-info-base text-sm font-medium">
                          Alina
                        </h6>
                        <p className="text-black-base text-sm ">32 Purchases</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3  px-4">Movies, Music</td>
                  <td className="py-3  px-4 ">$23993</td>

                  <td className="">
                    {/* <div className="text-center text-[#F0950C] py-2 bg-[#FFFAEB]  rounded-2xl mr-3">
                      Pending
                    </div> */}
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-[#E0ECFA] rounded mt-2 h-2">
                        <div
                          // className="bg-[#5497FA] h-1 rounded"
                          className="bg-success-base h-2 rounded"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-neutral-muted">60%</p>
                    </div>
                  </td>
                </tr>
                {/* tr 5 */}
                <tr className="text-sm hover:text-[#4D4D4D] hover:bg-[#E2E8F0] px-[10px] border-b border-dashed border-gray-200">
                  <td className="py-2   px-4">
                    <div className="flex items-center space-x-2">
                      <div className=" size-10 rounded-full">
                        <Image
                          src={shopeNumber1}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h6 className="text-info-base text-sm font-medium">
                          Luck
                        </h6>
                        <p className="text-black-base text-sm ">26 Purchases</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3  px-4">Sugar</td>
                  <td className="py-3  px-4 ">$20993</td>

                  <td className="">
                    {/* <div className="text-center text-[#F0950C] py-2 bg-[#FFFAEB]  rounded-2xl mr-3">
                      Pending
                    </div> */}
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-[#E0ECFA] rounded mt-2 h-2">
                        <div
                          // className="bg-[#5497FA] h-1 rounded"
                          className="bg-[#8A99AF] h-2 rounded"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <p className="text-sm text-neutral-muted">50%</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestShopeSellers;
