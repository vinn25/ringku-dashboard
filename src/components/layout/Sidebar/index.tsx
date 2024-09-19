import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/assets/logo-ringku.svg";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@/components/Button/IconButton";
import SidebarItem from "@/components/layout/Sidebar/SidebarItem";
import SidebarItemCollapse from "@/components/layout/Sidebar/SidebarItemCollapse";

const sidebarItems = [
  {
    id: "wallet",
    label: "My Wallet",
    route: "/",
  },
  {
    id: "card",
    label: "My Card",
    route: "/card",
  },
  {
    id: "chart",
    label: "Financial Chart",
    route: "/chart",
  },
  {
    id: "transaction",
    label: "Recent Transactions",
    route: "/transaction",
  },
];

const Sidebar = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <aside
      className={`fixed left-0 top-0 z-9999 h-screen ${
        props.sidebarOpen ? "w-22" : "w-72"
      } translate-x-0 flex-col overflow-y-hidden bg-black duration-300 ease-linear`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between gap-2 px-[18px] py-5">
        {!props.sidebarOpen && (
          <Link href="/">
            <Image src={Logo} alt="Logo" width={160} height={53.44} priority />
          </Link>
        )}
        <IconButton
          icon={<MenuIcon fontSize="small" />}
          size="small"
          variant="filled"
          onClick={() => {
            props.setSidebarOpen(!props.sidebarOpen);
          }}
        />
      </div>

      {/* Sidebar Menu */}
      <div className="px-[18px]">
        <nav>
          <div>
            <ul>
              {sidebarItems.map((item) =>
                !props.sidebarOpen ? (
                  <SidebarItem key={item.id} item={item} />
                ) : (
                  <SidebarItemCollapse key={item.id} item={item} />
                )
              )}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
