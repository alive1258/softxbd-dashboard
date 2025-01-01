"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

const CountryWiseSale = () => {
  const [modalShow, setModalShow] = useState(false);

  const toggleModal = () => {
    setModalShow((prev) => !prev);
  };

  return (
    <div>
      <div className="flex   items-center justify-between">
        <h4 className="text-[18px] font-medium text-neutral-muted">
          Country Wise Sales
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
      <div className="mt-5 space-y-4">
        {/* country 1  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#ECF3FC] size-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_264_2962)">
                  <path
                    d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z"
                    fill="#ED4C5C"
                  />
                  <path
                    d="M8.25 10.65L11.25 12.75L10.125 9.3L13.125 7.125H9.4125L8.25 3.75L7.125 7.125H3.375L6.375 9.3L5.25 12.75L8.25 10.65ZM13.2375 13.2375L12.375 13.425L13.2 13.7625V14.625L13.7625 13.9875L14.5875 14.2875L14.1 13.575L14.625 12.9L13.7625 13.0875L13.2375 12.375V13.2375ZM14.5125 10.6875L13.875 11.25L14.7375 11.175L15.1125 12L15.2625 11.1375L16.125 11.0625L15.375 10.6125L15.5625 9.75L14.925 10.3125L14.175 9.8625L14.5125 10.6875ZM14.7375 7.7625L15 8.625L15.2625 7.8H16.125L15.45 7.275L15.7125 6.4125L15 6.9375L14.325 6.375L14.5875 7.2375L13.875 7.725L14.7375 7.7625ZM13.2375 4.7625V5.625L13.7625 4.9125L14.625 5.1L14.1 4.425L14.5875 3.7125L13.7625 4.05L13.2 3.375V4.2375L12.375 4.575L13.2375 4.7625Z"
                    fill="#FFE62E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_264_2962">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h6 className="text-info-base text-sm font-medium">
                United States
              </h6>
              <p className="text-black-base text-sm ">2452 Sales</p>
            </div>
          </div>
          <div>
            <p className="text-info-base text-sm font-medium">$12,000</p>
            <div className="text-danger-base text-sm flex items-center space-x-1">
              {/* <IoMdArrowUp /> */}
              <IoMdArrowDown />
              <p>0.58%</p>
            </div>
          </div>
        </div>
        {/* country 2  */}
        <div className="flex  items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#ECF3FC] size-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_264_2977)">
                  <path
                    d="M11.9992 23.25C16.9117 23.25 21.0742 20.1375 22.6117 15.75H1.38672C2.92422 20.1375 7.08672 23.25 11.9992 23.25Z"
                    fill="#428BC1"
                  />
                  <path
                    d="M11.9992 0.75C7.08672 0.75 2.92422 3.9 1.38672 8.25H22.6117C21.0742 3.9 16.9117 0.75 11.9992 0.75Z"
                    fill="#699635"
                  />
                  <path
                    d="M22.6125 15.75C23.025 14.5875 23.25 13.3125 23.25 12C23.25 10.6875 23.025 9.4125 22.6125 8.25H1.3875C0.975 9.4125 0.75 10.6875 0.75 12C0.75 13.3125 0.975 14.5875 1.3875 15.75H22.6125Z"
                    fill="#FFE62E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_264_2977">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h6 className="text-info-base text-sm font-medium">Russia</h6>
              <p className="text-black-base text-sm ">2452 Sales</p>
            </div>
          </div>
          <div>
            <p className="text-info-base text-sm font-medium">$12,560</p>
            <div className="text-success-base text-sm flex items-center space-x-1">
              <IoMdArrowUp />

              <p>2.32%</p>
            </div>
          </div>
        </div>
        {/* country 3  */}
        <div className="flex  items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#ECF3FC] size-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_264_2993)">
                  <path
                    d="M11.9992 0.75C7.08672 0.75 2.92422 3.9 1.38672 8.25H22.6117C21.0742 3.9 16.9117 0.75 11.9992 0.75Z"
                    fill="#ED4C5C"
                  />
                  <path
                    d="M11.9992 23.25C16.9117 23.25 21.0742 20.1375 22.6117 15.75H1.38672C2.92422 20.1375 7.08672 23.25 11.9992 23.25Z"
                    fill="#3E4347"
                  />
                  <path
                    d="M1.3875 8.25C0.975 9.4125 0.75 10.6875 0.75 12C0.75 13.3125 0.975 14.5875 1.3875 15.75H22.6125C23.025 14.5875 23.25 13.3125 23.25 12C23.25 10.6875 23.025 9.4125 22.6125 8.25H1.3875Z"
                    fill="#F9F9F9"
                  />
                  <path
                    d="M11.4739 9.4124C11.5864 9.3374 11.6614 9.4124 11.7364 9.4874C11.7739 9.5624 11.7739 9.7874 11.6989 10.0499C11.6614 10.1999 11.5489 10.3499 11.4739 10.4624C11.6239 10.4624 11.8114 10.4249 11.9989 10.3499C12.1864 10.4249 12.3364 10.4624 12.5239 10.4624C12.4489 10.3124 12.3738 10.0124 12.4114 9.7874C12.4114 9.4499 12.3739 9.3374 12.2989 9.2624C12.2239 9.1874 12.0364 9.1499 11.9239 9.1499C11.8489 9.1499 11.8489 9.1874 11.8489 9.1874C11.6989 9.1499 11.5864 9.1499 11.5114 9.1874C11.4364 9.2624 11.4364 9.4499 11.4739 9.4124Z"
                    fill="white"
                  />
                  <path
                    d="M13.9867 10.5375C13.9117 10.125 13.4992 10.2375 13.1617 10.425C13.0117 10.5 12.8617 10.575 12.7117 10.575H12.5992C12.4117 10.575 12.1867 10.5375 11.9992 10.4625C11.8117 10.5375 11.5867 10.575 11.3992 10.575H11.3242C11.1367 10.575 10.9867 10.5 10.8367 10.3875C10.5367 10.2375 10.1242 10.125 10.0117 10.5C10.0867 10.4625 10.1617 10.3875 10.1992 10.3875L10.0492 13.9875L10.1242 13.9125L10.2742 10.425C10.3117 10.4625 10.4617 10.6125 10.4992 10.6125L10.3867 13.65L10.4992 13.5375L10.6117 10.65C10.6492 10.6875 10.7617 10.7625 10.7992 10.8L10.6867 13.3125L10.9867 13.05L11.2867 12.0375C11.0242 11.475 11.0617 10.9875 11.0617 10.9875H11.1367C11.3242 10.9875 11.7367 10.875 11.9242 10.7625C11.9617 10.7625 11.9617 10.725 11.9992 10.725C11.9992 10.7625 12.0367 10.7625 12.0742 10.8C12.2617 10.9125 12.6742 11.025 12.8617 11.025H12.9367C12.9367 11.025 12.9742 11.5125 12.7117 12.075L12.9742 13.05L13.2742 13.3125L13.1617 10.8375C13.1992 10.8 13.2742 10.725 13.3492 10.6875L13.4617 13.5L13.5742 13.6125L13.4617 10.6125C13.4992 10.575 13.6492 10.4625 13.6867 10.425L13.8367 13.875L13.9117 13.95L13.7617 10.3875C13.7992 10.425 13.9117 10.5 13.9867 10.5375Z"
                    fill="white"
                  />
                  <path
                    d="M11.6602 11.1374V12.5999C11.6602 12.5999 11.6602 12.6374 11.6977 12.6374C11.7352 12.7124 11.8102 12.7499 11.8477 12.8249L11.9602 12.9374L12.0727 12.8249L12.2602 12.6374V11.2124C12.1477 11.1749 12.0352 11.1374 11.9602 11.0624C11.9227 11.0249 11.8102 11.0624 11.6602 11.1374Z"
                    fill="white"
                  />
                  <path
                    d="M13.6125 14.2124C13.6125 14.0249 13.425 14.0249 13.275 14.0624C13.2375 14.0624 13.2375 14.0624 13.2 14.0999L12.975 13.2749L14.2125 14.4749L14.0625 10.5749C14.025 9.9749 13.5375 10.1249 13.2 10.3499C13.0125 10.4624 12.8625 10.5374 12.675 10.5374C12.4125 10.0874 12.5625 9.4874 12.375 9.3374C12.3 9.2624 12.0375 9.1499 11.85 9.1499C11.7375 9.1499 11.775 9.2249 11.775 9.2249C11.5875 9.1874 11.4375 9.1874 11.3625 9.2624C11.2875 9.2999 11.3625 9.6749 11.4 9.5999C11.5125 9.4874 11.55 9.5249 11.625 9.6374C11.7 9.7499 11.55 10.1999 11.3625 10.5374C11.1375 10.5374 10.95 10.4624 10.7625 10.3499C10.3875 10.1249 9.9 10.0124 9.9 10.5749L9.75 14.4374L10.9875 13.2749L10.7625 14.0624C10.725 14.0624 10.725 14.0624 10.6875 14.0249C10.5375 13.9874 10.35 13.9874 10.35 14.1749C10.125 14.1374 10.05 14.4749 10.275 14.5499C10.275 14.6624 10.275 14.7374 10.425 14.7374C10.7625 14.8499 11.3625 14.8874 11.9625 14.8874C12.5625 14.8874 13.1625 14.8499 13.5 14.7374C13.65 14.6999 13.65 14.6249 13.65 14.5499C13.95 14.4749 13.8375 14.1374 13.6125 14.2124ZM11.7 12.5999C11.7 12.5624 11.7 12.5624 11.7 12.5999L11.6625 12.5624V11.1374C11.8125 11.0999 11.925 11.0624 12 10.9874C12.075 11.0624 12.1875 11.0999 12.3 11.1374V12.5624C12.225 12.6374 12.1875 12.7124 12.1125 12.7499L12 12.8624L11.8875 12.7499C11.8125 12.7124 11.775 12.6374 11.7 12.5999ZM11.7 10.0874C11.775 9.8249 11.775 9.5999 11.7375 9.5249C11.6625 9.4499 11.5875 9.3749 11.475 9.4499C11.4375 9.4874 11.4375 9.2999 11.5125 9.2624C11.5875 9.2249 11.7 9.2249 11.85 9.2624C11.85 9.2624 11.85 9.1874 11.925 9.2249C12.0375 9.2249 12.2625 9.2999 12.3 9.3374C12.3375 9.3749 12.4125 9.5249 12.4125 9.8624C12.4125 10.0874 12.45 10.3874 12.525 10.5374C12.375 10.5374 12.1875 10.4999 12 10.4249C11.8125 10.4999 11.6625 10.5374 11.475 10.5374C11.55 10.3874 11.6625 10.2374 11.7 10.0874ZM10.725 13.4249L10.8375 10.9124C10.8 10.8749 10.725 10.7999 10.65 10.7624L10.5 13.6124L10.3875 13.7249L10.5 10.6874C10.4625 10.6499 10.3125 10.5374 10.275 10.4999L10.125 13.9874L10.05 14.0624L10.2 10.4624C10.1625 10.4624 10.05 10.4999 10.0125 10.5749C10.125 10.1999 10.5375 10.3124 10.8375 10.4999C10.9875 10.6124 11.175 10.6499 11.325 10.6874H11.4C11.5875 10.6874 11.775 10.6499 12 10.5749C12.225 10.6499 12.4125 10.6874 12.6 10.6874H12.7125C12.8625 10.6499 13.0125 10.6124 13.1625 10.5374C13.5 10.3499 13.9125 10.2374 13.9875 10.6499C13.9125 10.6124 13.8 10.5374 13.7625 10.5374L13.9125 14.0999L13.8375 14.0249L13.6875 10.4999C13.65 10.5374 13.5 10.6874 13.4625 10.6874L13.575 13.6874L13.4625 13.5749L13.35 10.7624C13.3125 10.7999 13.2 10.8749 13.1625 10.9124L13.275 13.3874L12.975 13.1249L12.7125 12.1499C12.975 11.5874 12.9375 11.0999 12.9375 11.0999H12.8625C12.675 11.0999 12.2625 11.0249 12.075 10.8749C12.0375 10.8749 12.0375 10.8374 12 10.7999C12 10.7999 11.9625 10.8374 11.925 10.8374C11.7375 10.9499 11.325 11.0624 11.1375 11.0624H11.0625C11.0625 11.0624 11.025 11.5499 11.2875 12.1124L10.9875 13.1249L10.725 13.4249ZM12 14.1749H11.5875L11.85 12.8999C11.8875 12.9374 11.925 12.9749 12 13.0124C12.0375 12.9749 12.1125 12.9374 12.15 12.8999L12.45 14.1749H12Z"
                    fill="#C09300"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_264_2993">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h6 className="text-info-base text-sm font-medium">Argentina</h6>
              <p className="text-black-base text-sm ">2452 Sales</p>
            </div>
          </div>
          <div>
            <p className="text-info-base text-sm font-medium">$12,000</p>
            <div className="text-danger-base text-sm flex items-center space-x-1">
              {/* <IoMdArrowUp /> */}
              <IoMdArrowDown />
              <p>0.58%</p>
            </div>
          </div>
        </div>
        {/* country 4  */}
        <div className="flex  items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#ECF3FC] size-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_264_3014)">
                  <path
                    d="M18 2.475C16.275 1.3875 14.2125 0.75 12 0.75C9.7875 0.75 7.725 1.3875 6 2.475V21.4875C7.725 22.575 9.7875 23.2125 12 23.2125C14.2125 23.2125 16.275 22.575 18 21.4875V2.475Z"
                    fill="#F9F9F9"
                  />
                  <path
                    d="M18 2.4751V21.4876C21.15 19.5376 23.25 15.9376 23.25 11.9626C23.25 7.9876 21.15 4.4626 18 2.4751ZM6 2.4751C2.85 4.4626 0.75 8.0626 0.75 12.0001C0.75 15.9376 2.85 19.5376 6 21.5251V2.4751ZM16.0875 11.8501C15.9375 11.7751 15.9 11.6251 15.9375 11.5501L16.3125 10.2001L15 10.4626C14.9625 10.4626 14.8125 10.4626 14.775 10.2001L14.6625 9.7501L13.7625 10.8001C13.7625 10.8001 13.1625 11.4376 13.35 10.4626L13.725 8.4001L13.0125 8.7751C12.975 8.7751 12.825 8.8126 12.6375 8.4376L12 7.1251L11.325 8.3626C11.1375 8.7376 10.9875 8.7001 10.95 8.7001L10.2375 8.3251L10.6125 10.3876C10.8 11.3626 10.2 10.7251 10.2 10.7251L9.3 9.6751L9.1875 10.1251C9.1125 10.3876 9 10.3876 8.9625 10.3876L7.65 10.1251L8.025 11.4751C8.025 11.5876 8.025 11.7001 7.875 11.7751L7.5 12.0001C7.5 12.0001 9 13.2001 9.4875 13.6126C9.6 13.6876 9.825 13.9126 9.75 14.1751L9.5625 14.7001L11.625 14.4001C11.7375 14.4001 11.9625 14.4001 11.925 14.7376L11.8125 16.8751H12.1875L12.075 14.7376C12.075 14.4001 12.3 14.4001 12.375 14.4001L14.4375 14.7001L14.25 14.1751C14.175 13.9126 14.4 13.6876 14.5125 13.6126C15 13.2001 16.5 12.0001 16.5 12.0001L16.0875 11.8501Z"
                    fill="#ED4C5C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_264_3014">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h6 className="text-info-base text-sm font-medium">Brasil</h6>
              <p className="text-black-base text-sm ">2452 Sales</p>
            </div>
          </div>
          <div>
            <p className="text-info-base text-sm font-medium">$12,560</p>
            <div className="text-success-base text-sm flex items-center space-x-1">
              <IoMdArrowUp />

              <p>2.32%</p>
            </div>
          </div>
        </div>
        {/* country 5  */}
        <div className="flex  items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#ECF3FC] size-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_264_3029)">
                  <path
                    d="M0.75 12C0.75 18.225 5.775 23.25 12 23.25C18.225 23.25 23.25 18.225 23.25 12H0.75Z"
                    fill="#ED4C5C"
                  />
                  <path
                    d="M12 0.75C18.225 0.75 23.25 5.775 23.25 12H12V0.75Z"
                    fill="#F9F9F9"
                  />
                  <path
                    d="M12 0.75C5.775 0.75 0.75 5.775 0.75 12H12V0.75Z"
                    fill="#2A5F9E"
                  />
                  <path
                    d="M7.5 8.1375L9.3375 9.375L8.6625 7.3875L10.5 6.075H8.2125L7.5 4.125L6.825 6.075H4.5L6.3375 7.3875L5.6625 9.375L7.5 8.1375Z"
                    fill="#F9F9F9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_264_3029">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h6 className="text-info-base text-sm font-medium">Mexico</h6>
              <p className="text-black-base text-sm ">2452 Sales</p>
            </div>
          </div>
          <div>
            <p className="text-info-base text-sm font-medium">$12,000</p>
            <div className="text-danger-base text-sm flex items-center space-x-1">
              {/* <IoMdArrowUp /> */}
              <IoMdArrowDown />
              <p>0.58%</p>
            </div>
          </div>
        </div>
        {/* country 6  */}
        <div className="flex  items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#ECF3FC] size-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_264_3046)">
                  <path
                    d="M22.5008 15.75C20.4383 15.75 18.7508 14.0625 18.7508 12H4.05078V19.95C6.07578 21.975 8.88828 23.25 12.0008 23.25C16.9133 23.25 21.0758 20.1 22.6133 15.75H22.5008Z"
                    fill="#3E4347"
                  />
                  <path
                    d="M22.5008 8.25H22.6133C21.0758 3.9 16.9133 0.75 12.0008 0.75C8.88828 0.75 6.07578 2.025 4.05078 4.05V12H18.7508C18.7508 9.9375 20.4383 8.25 22.5008 8.25Z"
                    fill="#ED4C5C"
                  />
                  <path
                    d="M22.6133 8.25H4.05078V15.75H22.6133C23.0258 14.5875 23.2508 13.3125 23.2508 12C23.2508 10.6875 23.0258 9.4125 22.6133 8.25Z"
                    fill="#F9F9F9"
                  />
                  <path
                    d="M4.05 4.05005C2.025 6.07505 0.75 8.88755 0.75 12C0.75 15.1125 2.025 17.925 4.05 19.95L12 12L4.05 4.05005Z"
                    fill="#699635"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_264_3046">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h6 className="text-info-base text-sm font-medium">Germany</h6>
              <p className="text-black-base text-sm ">2452 Sales</p>
            </div>
          </div>
          <div>
            <p className="text-info-base text-sm font-medium">$12,560</p>
            <div className="text-success-base text-sm flex items-center space-x-1">
              <IoMdArrowUp />

              <p>2.32%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryWiseSale;
