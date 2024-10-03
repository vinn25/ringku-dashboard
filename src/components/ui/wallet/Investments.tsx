import { LinearProgress } from "@mui/material";
import Image from "next/image";
import React from "react";

const Investments = ({ items }: any) => {
  return (
    <div
      key={items.id}
      className="h-40 flex flex-col gap-[18px] p-6 border-neutral-40 border-2 rounded-md shadow-sm"
    >
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-row gap-3 items-center">
          <Image src={items.icon} alt="EmergencyFund" />
          <div className="text-text-lg font-semibold text-neutral-90">
            {items.title}
          </div>
        </div>
        <div className="text-text-xs text-neutral-70">{items.description}</div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-baseline">
          <div className="flex items-baseline gap-1">
            <div className="text-text-lg text-violet-500">
              {items.currentInvestment}
            </div>
            <div className="text-text-xs text-neutral-300">
              / ${items.totalInvestment}
            </div>
          </div>
          <div className="text-text-sm text-neutral-80">
            {items.progressBar}%
          </div>
        </div>
        <LinearProgress
          variant="determinate"
          className="w-ful h-[10px] bg-violet-200 rounded-lg"
          value={items.progressBar}
        />
      </div>
    </div>
  );
};

export default Investments;
