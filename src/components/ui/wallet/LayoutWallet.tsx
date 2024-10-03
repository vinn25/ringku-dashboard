import EmergencyFund from "@/assets/icon-emergency-fund.svg";
import FoodsAndGroceries from "@/assets/icon-foods-and-groceries.svg";
import Donation from "@/assets/icon-donation.svg";
import Education from "@/assets/icon-education.svg";
import RepairVehicle from "@/assets/icon-repair-vehicle.svg";
import TravelPlan from "@/assets/icon-travel-plan.svg";

import React from "react";
import BalanceInfo from "@/components/ui/wallet/BalanceInfo";
import Investments from "@/components/ui/wallet/Investments";
import CreateWallet from "@/components/ui/wallet/CreateWallet";

const UserInvestments = [
  {
    id: "emergency-fund",
    icon: EmergencyFund,
    title: "Emergency fund",
    description: "Last Paid on August 28, 2022",
    currentInvestment: "$300",
    totalInvestment: "$1000",
    progressBar: 30,
  },
  {
    id: "travel-plan",
    icon: TravelPlan,
    title: "Travel Plan",
    description: "Last Paid on June 01, 2022",
    currentInvestment: "$10,000",
    totalInvestment: "$20,000",
    progressBar: 50,
  },
  {
    id: "education",
    icon: Education,
    title: "Education",
    description: "Last Paid on May 14, 2022",
    currentInvestment: "$7,000",
    totalInvestment: "$10,000",
    progressBar: 70,
  },
  {
    id: "food-and-groceries",
    icon: FoodsAndGroceries,
    title: "Food and Groceries",
    description: "Last Paid on August 28, 2022",
    currentInvestment: "$300",
    totalInvestment: "$1000",
    progressBar: 30,
  },
  {
    id: "repair-vehicle",
    icon: RepairVehicle,
    title: "Repair Vehicle",
    description: "Last Paid on August 01, 2022",
    currentInvestment: "$900",
    totalInvestment: "$1000",
    progressBar: 90,
  },
  {
    id: "donation",
    icon: Donation,
    title: "Donation",
    description: "Last Paid on August 20, 2022",
    currentInvestment: "$200",
    totalInvestment: "$1000",
    progressBar: 20,
  },
];

const LayoutWallet = () => {
  return (
    <div className="container mim-h-screen max-h-full">
      {/* Balance Info */}
      <BalanceInfo />
      {/* Investments */}
      <div className="grid grid-cols-3 gap-4 mb-6 bg-white">
        {UserInvestments.map((items) => (
          <Investments key={items.id} items={items} />
        ))}
      </div>
      {/* Create Wallet */}
      <CreateWallet />
    </div>
  );
};

export default LayoutWallet;
