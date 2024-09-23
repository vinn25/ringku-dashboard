import IconButton from "@/components/Button/IconButton";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import { Help, Inbox } from "@mui/icons-material";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white border-b-neutral-40 border-b-2">
      <div className="flex grow items-center justify-between shadow-2 md:px-10 p-8">
        <div className="flex items-center gap-6 m-0">
          <IconButton
            icon={<Inbox fontSize="medium" />}
            size="small"
            variant="transparent"
          />
          <IconButton
            icon={<ZoomInMapIcon fontSize="medium" />}
            size="small"
            variant="transparent"
          />
        </div>

        <div>
          <IconButton
            icon={<Help fontSize="medium" />}
            size="small"
            variant="transparent"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
