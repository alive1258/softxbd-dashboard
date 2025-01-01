import React from "react";
import CountryWiseSale from "./CountryWiseSale";
import BestShopeSellers from "../BestShopeSellers/BestShopeSellers";
import Visitors from "../Visitors/Visitors";

const SaleDetails = () => {
  return (
    <div className="mt-6 md:grid-cols-12 grid gap-4 grid-cols-1 ">
      <div className="md:col-span-3 bg-[#fff] rounded-xl w-full p-4">
        <CountryWiseSale />
      </div>
      <div className="md:col-span-5 bg-[#fff] rounded-xl w-full p-4">
        <BestShopeSellers />
      </div>
      <div className="md:col-span-4 bg-[#fff] rounded-xl w-full p-4">
        <Visitors />
      </div>
    </div>
  );
};

export default SaleDetails;
