import IconButton from "@/components/Button/IconButton";
import SendPayment from "@/assets/icon-send-payment.svg";
import RequestPayment from "@/assets/icon-request-payment.svg";
import { MoreVert } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const BalanceInfo = () => {
  return (
    <div className="flex flex-row justify-between h-40 mb-6">
      <div className="w-[620px] px-6 py-4 border-neutral-40 border-2 rounded-md shadow-md">
        <div className="flex justify-between mb-[21px]">
          <div className="text-title-sm text-neutral-100 font-semibold">
            Hi User!
          </div>
          <div>
            <IconButton
              icon={<MoreVert fontSize="medium" />}
              size="small"
              variant="transparent"
            />
          </div>
        </div>
        <div className="text-neutral-90 text-title-md font-medium">
          $120,000
        </div>
      </div>
      <div className="flex flex-row justify-center w-[400px] border-neutral-40 border-2 rounded-md shadow-md px-6">
        <div className="my-[30px] flex flex-col items-center gap-[10px] rounded-md cursor-pointer">
          <Image src={SendPayment} alt="SendPayment" />
          <div className="text-text-sm font-semibold text-neutral-90">
            Send a payment
          </div>
        </div>
        <div className="w-[2px] h-full mx-8 bg-neutral-40" />
        <div className="my-[30px] flex flex-col items-center gap-[10px] rounded-md cursor-pointer">
          <Image src={RequestPayment} alt="RequestPayment" />
          <div className="text-text-sm font-semibold text-neutral-90">
            Request a payment
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceInfo;
