const Sidebar = ({ sidebarModalActive }) => {
  return (
    <div
      className={` ${
        sidebarModalActive
          ? "-translate-x-full w-0"
          : "w-[280px] translate-x-0 "
      }   transition-transform duration-500 ease-in-out shadow-lg bg-[#fff]  border-r border-gray-200`}
    >
      <h1 className="text-2xl flex justify-center items-center text-primary-base font-bold text-center h-[72px]  border-b border-gray-200">
        SOFTXBD{" "}
      </h1>

      <div className="px-4 pt-2 h-[90vh] sidebarScroll overflow-y-auto">
        <p className="btn">menu</p>
      </div>
    </div>
  );
};

export default Sidebar;
