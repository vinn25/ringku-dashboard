import React from "react";
import ChevronRight from "@/assets/icon-chevron-right.svg";
import DigitalCard from "@/assets/image-card.svg";
import Image from "next/image";
import IconButton from "@/components/Button/IconButton";
import { ArrowForward } from "@mui/icons-material";

const CardInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center px-3 py-[6px] h-[51px] bg-neutral-10 hover:bg-neutral-20 border-neutral-40 border-2 cursor-pointer rounded-md">
        <div className="text-text-md text-neutral-100 font-semibold">
          Primary Card
        </div>
        <Image src={ChevronRight} alt="ChevronRight" />
      </div>
      <div className="h-[376px] px-6 py-[18px] bg-neutral-20 border-neutral-40 border-2 rounded-md">
        <Image
          src={DigitalCard}
          alt="DigitalCard"
          width={462}
          height={260}
          className="mx-auto"
        />
        <div>
          <div className="text-neutral-100 text-text-lg font-semibold mb-3">
            Card Information
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between text-neutral-90 text-text-md font-medium">
              <div>Card No.</div>
              <div>4889 9271 1937 1932</div>
            </div>
            <div className="flex justify-between text-neutral-90 text-text-md font-medium">
              <div>Expiry Date</div>
              <div>12/28</div>
            </div>
            <div className="flex justify-between text-neutral-90 text-text-md font-medium">
              <div>CVV (3-digit security code)</div>
              <div>***</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between bg-violet-200 hover:bg-violet-100 border-neutral-40 border-2 px-6 py-[18px] cursor-pointer rounded-md">
        <div className="text-neutral-90 text-text-lg font-medium w-[250px]">
          See how we can personalize your account:
        </div>
        <div className="flex items-baseline">
          <IconButton
            icon={<ArrowForward fontSize="large" />}
            size="large"
            variant="filled"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
