import CardInfo from "@/components/ui/card/CardInfo";
import HelpInfo from "@/components/ui/card/HelpInfo";
import React from "react";

const LayoutCard = () => {
  return (
    <div className="container min-h-screen max-h-full grid grid-cols-2 gap-6 mb-6">
      <div>
        <CardInfo />
      </div>
      <div className="border-neutral-40 border-2 rounded-md p-6 shadow-sm">
        <HelpInfo />
      </div>
    </div>
  );
};

export default LayoutCard;
