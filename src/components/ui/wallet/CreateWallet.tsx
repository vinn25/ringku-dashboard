import IconButton from "@/components/Button/IconButton";
import { Add } from "@mui/icons-material";
import React from "react";

const CreateWallet = () => {
  return (
    <div className="flex flex-col gap-[14px] justify-center items-center h-[124px] bg-violet-200 hover:bg-violet-300 px-[274px] border-neutral-40 border-2 rounded-md shadow-sm cursor-pointer mb-20">
      <div>
        <IconButton
          icon={<Add fontSize="small" />}
          size="small"
          variant="filled"
          disableTouchRipple={true}
          disableFocusRipple={true}
        />
      </div>
      <div className="text-text-lg text-violet-500 font-semibold">
        Create New Wallet
      </div>
    </div>
  );
};

export default CreateWallet;
