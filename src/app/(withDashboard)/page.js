import SaleDashboard from "@/components/SaleDashBoard/SaleDashboard";
import SaleDetails from "@/components/SaleDashBoard/SaleDetails/SaleDetails";

import SaleReport from "@/components/SaleDashBoard/SaleReport";
import SalesOverview from "@/components/SaleDashBoard/SalesOverview";
import TopSaleProduct from "@/components/SaleDashBoard/TopSaleProduct";

const page = () => {
  return (
    <div className="p-6 ">
      <SaleDashboard />
      <SaleReport />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SalesOverview />
        <TopSaleProduct />
      </div>
      <div>
        <SaleDetails />
      </div>
    </div>
  );
};

export default page;
