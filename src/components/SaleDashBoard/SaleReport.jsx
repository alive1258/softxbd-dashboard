import { TfiShoppingCart } from "react-icons/tfi";
import { IoArrowUpSharp } from "react-icons/io5";

const SaleReport = () => {
  return (
    <div className="pt-4">
      <h1 className="text-[22px] font-medium text-neutral-muted">
        Sales Dashboard
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
        <div className="bg-[#fff] p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-[16px] text-neutral-muted">Total Products</h4>
            <div className="size-10 rounded-full flex items-center justify-center bg-[#10B981]">
              <TfiShoppingCart className="text-xl text-[#fff]" />
            </div>
          </div>
          <div className="pt-2">
            <div>
              <h2 className="text-2xl font-medium text-neutral-muted">685</h2>
              <div className="flex pt-2 items-center space-x-2 ">
                <span className="text-[#10B981] text-sm">5.65%</span>
                <IoArrowUpSharp className="text-[#10B981]" />
                <span className="text-sm">Last 30 days</span>
              </div>
              {/* chart pi  */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleReport;
