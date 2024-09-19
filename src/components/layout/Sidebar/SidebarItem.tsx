import Link from "next/link";
import ChatIcon from "@mui/icons-material/Chat";
import React from "react";

const SidebarItem = ({ item }: any) => {
  return (
    <li className="p-5 rounded-md hover:bg-violet-900">
      <Link href={item.route} className="flex gap-[17px]">
        <ChatIcon />
        {item.label}
      </Link>
    </li>
  );
};

export default SidebarItem;
