import Link from "next/link";
import React from "react";
import { Tooltip } from "@mui/material";

const SidebarBottomCollapse = ({ item }: any) => {
  return (
    <li className="rounded-md hover:bg-violet-900">
      <Tooltip title={item.label} placement="right">
        <Link href="/" className="flex justify-center py-5">
          {item.icon}
        </Link>
      </Tooltip>
    </li>
  );
};

export default SidebarBottomCollapse;
