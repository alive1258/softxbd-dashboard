import { FaChevronDown } from "react-icons/fa";
import SaleChart from "./SaleChart";

const SalesOverview = () => {
  return (
    <>
      <div className="bg-[#fff]   mt-6 rounded-xl w-full">
        <div className="z-50 p-2 w-full">
          <div className="flex items-center justify-between pt-3 px-4">
            <h1 className="text-lg font-medium  pb-2">Sales Overview</h1>
            <div className="bg-[#7EAFEB] text-sm flex items-center rounded-md">
              {/* Active state for 'Day' */}
              <div className="bg-blue-base py-2.5 px-3 text-[#fff] rounded-l-md">
                <span>Day</span>
              </div>

              <span className="border-r border h-10 border-[#6398da]"></span>
              <span className="py-2.5 px-3 hover:bg-blue-base hover:text-[#fff] cursor-pointer ">
                Week
              </span>
              <span className="border-r border h-10 border-[#6398da]"></span>
              <span className="py-2.5 px-3 hover:bg-blue-base hover:text-[#fff]  cursor-pointer ">
                Month
              </span>
              <span className="border-r border h-10 border-[#6398da]"></span>
              <span className="py-2.5 px-3 hover:bg-blue-base hover:text-[#fff]  cursor-pointer ">
                Year
              </span>
            </div>
          </div>

          <div className="mt-6">
            <SaleChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesOverview;
