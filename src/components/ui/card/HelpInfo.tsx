import IconButton from "@/components/Button/IconButton";
import ChevronRight from "@/assets/icon-chevron-right.svg";
import { MoreVert } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const HelpOptions = [
  {
    id: "cash-flow",
    text: "Check Your Cash Flow",
    color: "border-l-error-500",
  },
  {
    id: "change-primary-card",
    text: "Change Primary Card",
    color: "border-l-error-600",
  },
  {
    id: "pay-tax",
    text: "Pay Tax",
    color: "border-l-violet-500",
  },
  {
    id: "make-invoice",
    text: "Make Invoice",
    color: "border-l-violet-700",
  },
  {
    id: "refer-friend",
    text: "Refer a Friend",
    color: "border-l-violet-300",
  },
];

const HelpInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="text-neutral-90 text-text-xl font-medium">
          Seek Our Help
        </div>
        <IconButton
          icon={<MoreVert fontSize="medium" />}
          size="small"
          variant="transparent"
        />
      </div>
      <div>
        {HelpOptions.map((option) => (
          <div
            key={option.id}
            className={`flex flex-row justify-between p-6 border-neutral-40 border-b-2 ${option.color} border-l-4 cursor-pointer`}
          >
            <div>{option.text}</div>
            <Image src={ChevronRight} alt="ChevronRight" />
          </div>
        ))}
      </div>
      <div className="bg-neutral-10 hover:bg-neutral-20 border-neutral-40 text-text-lg font-medium border-2 text-neutral-70 rounded-full px-6 py-3 w-fit cursor-pointer shadow-sm">
        Look More
      </div>
    </div>
  );
};

export default HelpInfo;
