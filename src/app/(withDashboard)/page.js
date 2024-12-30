import SaleDashboard from "@/components/SaleDashBoard/SaleDashboard";
import SaleReport from "@/components/SaleDashBoard/SaleReport";

const page = () => {
  return (
    <div className="p-6 ">
      <SaleDashboard />
      <SaleReport />
    </div>
  );
};

export default page;
