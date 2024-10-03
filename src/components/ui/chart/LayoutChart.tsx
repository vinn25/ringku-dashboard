import React from "react";
import InfoIcon from "@/assets/icon-info-.svg";
import ChartImage from "@/assets/image-chart.svg";
import ChevronDownIcon from "@/assets/icon-chevron-down.svg";
import Image from "next/image";
import ButtonDefault from "@/components/Button/ButtonDefault";
import LifetimeIncome from "@/assets/image-lifetime-income.svg";
import LifetimeOutcome from "@/assets/image-lifetime-outcome.svg";
import BonusIncome from "@/assets/image-bonus-income.svg";

const VariantIncome = [
  {
    id: "id_lifetime_income",
    image: LifetimeIncome,
    title: "Lifetime Income",
    money: "$40,728",
  },
  {
    id: "id_lifetime_outcome",
    image: LifetimeOutcome,
    title: "Lifetime Outcome",
    money: "$30,239",
  },
  {
    id: "id_bonus_income",
    image: BonusIncome,
    title: "Bonus Income",
    money: "$2,490",
  },
];

const LayoutChart = () => {
  return (
    <div className="container min-h-screen max-h-full mb-6">
      <div className="flex justify-between px-6 py-3 bg-violet-200 border-violet-500 border-2 rounded-md mb-6">
        <div className="flex flex-row gap-4 items-center">
          <Image src={InfoIcon} alt="InfoIcon" />
          <div className="text-text-sm text-violet-500">
            Please remember to fill that data that required for your debit card
          </div>
        </div>
        <ButtonDefault size="sm" text="Got it" variant="neutral" />
      </div>
      <div className="flex flex-col gap-8 mb-6">
        <div className="flex flex-row justify-between items-center">
          <div className="text-text-xl text-neutral-100 font-semibold">
            Statistic
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex gap-1 px-3 py-[6px] bg-neutral-10 border-neutral-40 border-2 rounded-[6px] text-text-sm font-medium text-neutral-90 cursor-pointer">
              Income Chart
              <Image src={ChevronDownIcon} alt="ChevronDownIcon" />
            </div>
            <div className="flex gap-1 px-3 py-[6px] bg-neutral-10 border-neutral-40 border-2 rounded-[6px] text-text-sm font-medium text-neutral-90 cursor-pointer">
              This Year
              <Image src={ChevronDownIcon} alt="ChevronDownIcon" />
            </div>
          </div>
        </div>
        <Image src={ChartImage} alt="ChartImage" />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {VariantIncome.map((item) => (
          <div
            key={item.id}
            className="flex gap-[18px] border-neutral-40 border-2 p-3 rounded-md"
          >
            <Image src={item.image} alt="Income" />
            <div>
              <div className="text-neutral-70 text-text-sm">{item.title}</div>
              <div className="text-neutral-90 text-text-lg font-semibold">
                {item.money}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutChart;
