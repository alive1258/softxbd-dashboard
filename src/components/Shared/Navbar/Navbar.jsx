"use client";

import { MdClose, MdMenuOpen } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import flags_us from "../../../../public/assets/images/flag.png";
import Image from "next/image";
import Profile from "./Profile";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { FiSun } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MobileScreenProfileModal from "./MobileScreenProfileModal";
import NavbarSearch from "./NavbarSearch";

const Navbar = ({ setSidebarModalActive, sidebarModalActive }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div
        className={`sticky top-0 h-[72px] z-[500] border-b border-gray-200 bg-white  duration-300 transition-transform`}
      >
        <div className="flex items-center">
          {/* Toggle Sidebar */}
          <div
            onClick={() => setSidebarModalActive(!sidebarModalActive)}
            className="ml-2 rounded-full flex items-center justify-center z-50 cursor-pointer"
          >
            {sidebarModalActive ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenuOpen className="text-2xl" />
            )}
          </div>

          {/* nav for mobile  */}
          <MobileNavbar navbar={navbar} setNavbar={setNavbar} />
          <div className={` hidden px-4 py-4 lg:flex items-center w-full`}>
            <div
              className={`relative mt-24 md:mt-0 w-full grid-cols-2  grid md:grid-cols-3 xl:grid-cols-2  gap-y-6 `}
            >
              {/* search box  */}
              <NavbarSearch />

              {/* notification message  and profile  */}
              <div className=" flex justify-end md:col-span-2 xl:col-span-1   w-full ">
                <div className="flex items-center gap-6">
                  {/* notification, message, country, mode   */}
                  <div className="flex items-center gap-4">
                    <span className="size-10 rounded-full p-2 bg-neutral-base">
                      <Image src={flags_us} width={24} height={24} alt="flag" />
                    </span>
                    <span className="size-10 rounded-full flex items-center justify-center bg-neutral-base">
                      <FiSun className="text-xl text-neutral-muted" />
                    </span>
                    <span className="size-10 rounded-full flex items-center justify-center bg-neutral-base">
                      <AiOutlineShoppingCart className="text-xl text-neutral-muted" />
                    </span>
                    {/* message */}
                    <div className="relative size-10 rounded-full p-2 bg-neutral-base">
                      <MdOutlineMail className="text-2xl text-neutral-muted" />
                      <span className="absolute -top-2 -right-[2px] size-5 rounded-full text-white bg-[#0064F7] text-[14px] flex items-center justify-center">
                        5
                      </span>
                    </div>
                    {/* notification */}
                    <div className="relative size-10 rounded-full p-2 bg-neutral-base">
                      <IoNotificationsOutline className="text-2xl text-neutral-muted" />
                      <span className="absolute -top-2 -right-[2px] size-5 rounded-full text-white bg-[#FF4234] text-[14px] flex items-center justify-center">
                        2
                      </span>
                    </div>
                  </div>
                  {/* profile  */}
                  <Profile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full overflow-hidden">
        {navbar && <MobileScreenProfileModal />}
      </div>
    </>
  );
};

export default Navbar;
