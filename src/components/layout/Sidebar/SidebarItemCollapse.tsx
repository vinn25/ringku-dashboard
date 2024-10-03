import Link from "next/link";
import ChatIcon from "@mui/icons-material/Chat";
import React from "react";
import { Tooltip } from "@mui/material";

const SidebarItemCollapse = ({ item }: any) => {
  return (
    <li className="rounded-md hover:bg-violet-900">
      <Tooltip title={item.label} placement="right">
        <Link href={item.route} className="flex justify-center py-5">
          <ChatIcon />
        </Link>
      </Tooltip>
    </li>
  );
};

export default SidebarItemCollapse;
