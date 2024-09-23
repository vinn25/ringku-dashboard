import Link from "next/link";
import React from "react";

const SidebarBottom = ({ item }: any) => {
  return (
    <li className="rounded-md hover:bg-violet-900">
      <Link href="/" className="p-5 flex gap-[17px] items-center">
        {item.icon}
        {item.label}
      </Link>
    </li>
  );
};

export default SidebarBottom;
