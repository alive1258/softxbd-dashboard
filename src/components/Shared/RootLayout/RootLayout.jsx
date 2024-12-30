"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const RootLayout = ({ children }) => {
  const [sidebarModalActive, setSidebarModalActive] = useState(false);

  return (
    <>
      <div className="flex items-start lg:gap-1">
        {/* Sidebar */}
        <div className=" h-screen sticky top-0 ">
          <Sidebar sidebarModalActive={sidebarModalActive} />
        </div>
        {/* Content */}
        <div className="w-full min-h-screen flex flex-col">
          <Navbar
            setSidebarModalActive={setSidebarModalActive}
            sidebarModalActive={sidebarModalActive}
          />
          <div className="flex-grow ">{children}</div>
          <h1> Footer</h1>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
